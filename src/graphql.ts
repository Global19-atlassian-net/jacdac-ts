import { graphql, buildSchema, parse, validate, DocumentNode, ExecutionResult, printSchema, GraphQLSchema } from "graphql"
import { Bus } from "./bus";


let schema: GraphQLSchema = undefined;

export function createGraphQLQuery(bus: Bus): (query: string | Query) => Promise<ExecutionResult> {
    // lazy allocated schema
    if (!schema) {
        // keep in sync with schema.graphql
        schema = buildSchema(`
        type Bus {
            connected: Boolean!
            connecting: Boolean!
            devices: [Device!]!
            device(deviceId: String): Device
        }
        type Device {
            deviceId: ID
            shortId: String!
            name: String!
            services: [Int!]!
        }
        schema {
          query: Bus
        }
        `);
    }

    const root = {
        connected: () => bus.connected,
        connecting: () => bus.connecting,
        devices: () => bus.devices(),
        device: (deviceId: string) => bus.device(deviceId)
    };

    return (query: string | Query) => {
        let source: string;
        const q = query as Query;
        if (q.source)
            source = q.source;
        else
            source = query as string;
        return graphql(schema, source, root);
    }
}

export interface Query {
    source: string;
    document: DocumentNode;
}

/**
 * Parses and validates a JACDAC GraphQL query into a document node
 * @param strings 
 */
export function jdql(strings): Query {
    // Parse
    const document = parse(strings);

    // Validate
    const validationErrors = validate(schema, document);
    if (validationErrors.length > 0)
        throw new Error(validationErrors.map(e => e.message).join(', '));
    return {
        source: strings,
        document
    }
}
