import React, { useContext, useEffect } from 'react';
import { Paper, createStyles, makeStyles, Theme, Grid, TextareaAutosize, TextField } from '@material-ui/core';
import { parseServiceSpecificationMarkdownToJSON } from '../../../../jacdac-spec/spectool/jdspec'
import { clearCustomServiceSpecifications, addCustomServiceSpecification, serviceMap } from '../../../../src/jdom/spec';
import RandomGenerator from '../RandomGenerator';
import AppContext, { DrawerType } from '../AppContext';
import ServiceSpecificationSource from '../ServiceSpecificationSource';
import useLocalStorage from '../useLocalStorage';
import { useDebounce } from 'use-debounce';
import PaperBox from '../ui/PaperBox'
import Alert from '../ui/Alert';
import GithubPullRequestButton from '../GithubPullRequestButton';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-markdown';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        marginBottom: theme.spacing(1)
    },
    segment: {
        marginBottom: theme.spacing(2)
    },
    pre: {
        margin: "0",
        padding: "0",
        backgroundColor: "transparent",
        whiteSpec: "pre-wrap",
        flexGrow: 1
    }
}));

export default function ServiceSpecificationEditor() {
    const classes = useStyles();
    const { drawerType } = useContext(AppContext)
    const { value: source, setValue: setSource } = useLocalStorage('jacdac:servicespecificationeditorsource',
        `# My Service

TODO: describe your service

    identifier: 
    extends: _sensor

## Registers

    ro position: i32 @ reading

TODO describe this register
`
    )

    const [debouncedSource] = useDebounce(source, 700)
    const includes = serviceMap()
    const json = parseServiceSpecificationMarkdownToJSON(debouncedSource, includes)
    useEffect(() => {
        addCustomServiceSpecification(json)
        if (json.classIdentifier)
            clearCustomServiceSpecifications();
    }, [debouncedSource])
    const annotations = json?.errors?.map(error => ({
        row: error.line,
        column: 1,
        text: error.message,
        type: 'error'
    }))
    const drawerOpen = drawerType != DrawerType.None
    const handleSourceChange = (source: string) => {
        setSource(source)
    }
    const handleHighlight = (source: string) => highlight(source, languages.markdown)
    const servicePath = json && `services/${json.shortId || `0x${json.classIdentifier.toString(16)}`}.md`
    return (
        <Grid spacing={2} className={classes.root} container>
            <Grid key="editor" item xs={12} md={drawerOpen ? 12 : 7}>
                <PaperBox>
                    {source !== undefined &&
                        <Editor
                            tabSize={4}
                            value={source}
                            onValueChange={handleSourceChange}
                            highlight={handleHighlight}
                            padding={10}
                        />}
                </PaperBox>
            </Grid>
            <Grid key="output" item xs={12} md={drawerOpen ? 12 : 5}>
                {!!annotations?.length &&
                    <Alert severity="warning">
                        <ul>
                            {annotations.map(a => <li>line {a.row}: {a.text}</li>)}
                        </ul>
                    </Alert>
                }
                <Paper square className={classes.segment}>
                    <RandomGenerator device={false} />
                </Paper>
                <ServiceSpecificationSource
                    serviceSpecification={json}
                    showSpecification={true} />
            </Grid>
            <Grid key="submit" item xs={12}>
                <GithubPullRequestButton
                    label={"submit service"}
                    title={json && `Service: ${json.name}`}
                    head={json && `services-0x${json.classIdentifier.toString(16)}`}
                    body={`This pull request adds a new service definition for JACDAC.`}
                    commit={json && `added service files`}
                    files={servicePath && {
                        [servicePath]: debouncedSource
                    }}
                />
            </Grid>
        </Grid>
    );
}
