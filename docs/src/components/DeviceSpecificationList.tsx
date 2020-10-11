import React from 'react';
import { createStyles, GridList, GridListTile, GridListTileBar, makeStyles, Theme, useMediaQuery, useTheme } from '@material-ui/core';
import { deviceSpecifications, imageDeviceOf } from '../../../src/dom/spec';
// tslint:disable-next-line: match-default-export-name no-submodule-imports
import InfoIcon from '@material-ui/icons/Info';
import Markdown from "./Markdown"
import { IconButton } from "gatsby-theme-material-ui";
import { arrayShuffle } from '../../../src/dom/utils';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    ellipsis: {
        textOverflow: 'ellipsis',
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}),
);

export default function DeviceSpecificationList(props: {
    count?: number,
    shuffle?: boolean,
    requiredServiceClasses?: number[]
}) {
    const { count, shuffle, requiredServiceClasses } = props;
    const theme = useTheme();
    const classes = useStyles();
    let specs = deviceSpecifications();
    const mobile = useMediaQuery(theme.breakpoints.down('xs'));
    const medium = useMediaQuery(theme.breakpoints.down('md'));
    const cols = mobile ? 1 : medium ? 3 : 4;

    if (requiredServiceClasses)
        specs = specs.filter(spec => spec.services.every(srv => requiredServiceClasses.indexOf(srv) > -1))
    if (shuffle)
        arrayShuffle(specs)
    if (count !== undefined)
        specs = specs.slice(0, count)

    return <GridList className={classes.root} cols={cols}>
        {specs.map(spec => <GridListTile key={spec.id}>
            <img src={imageDeviceOf(spec)} alt={spec.name} />
            <GridListTileBar
                title={spec.name}
                subtitle={<Markdown className={classes.ellipsis} source={spec.description.split('.', 1)[0]} />}
                actionIcon={<>
                    <IconButton to={`/devices/${spec.id}`} aria-label={`info about ${spec.name}`} className={classes.icon}>
                        <InfoIcon />
                    </IconButton>
                </>
                }
            />
        </GridListTile>)}
    </GridList>
}