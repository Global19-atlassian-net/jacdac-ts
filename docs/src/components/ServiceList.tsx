
import React, { useContext } from 'react';
import { Grid, makeStyles, Theme, createStyles, CardContent, Card, CardActions, Switch } from '@material-ui/core';
import ServiceCard from './ServiceCard';
import useChange from '../jacdac/useChange';
import JACDACContext, { JDContextProps } from '../../../src/react/Context';
import useGridBreakpoints from './useGridBreakpoints';
import DeviceCardHeader from './DeviceCardHeader';
import { JDService } from '../../../src/dom/service';
import { DeviceLostAlert } from './DeviceLostAlert';
import { JDDevice } from '../../../src/dom/device';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        marginBottom: theme.spacing(1)
    },
}))

function ServiceListItem(props: {
    service: JDService,
    content?: JSX.Element | JSX.Element[],
    checked?: boolean,
    checkedDisabled?: boolean
    toggleChecked?: () => void,
    actions?: JSX.Element | JSX.Element[]
}) {
    const { service, content, checked, checkedDisabled, toggleChecked, actions } = props;
    const { device } = service;

    const handleCheck = () => toggleChecked()

    return <Card>
        <DeviceCardHeader device={device} />
        <CardContent>
            <DeviceLostAlert device={device} />
            {content}
        </CardContent>
        <CardActions>
            {checked !== undefined && <Switch disabled={checkedDisabled} onChange={handleCheck} checked={checked} />}
            {actions}
        </CardActions>
    </Card>
}

export default function ServiceList(props: {
    serviceClass: number,
    selected?: (service: JDService) => boolean,
    toggleSelected?: (service: JDService) => void,
    content?: (service: JDService) => JSX.Element | JSX.Element[],
    actions?: (service: JDService) => JSX.Element | JSX.Element[]
}) {
    const { serviceClass, selected, toggleSelected, content, actions } = props
    const { bus } = useContext<JDContextProps>(JACDACContext)
    const services = useChange(bus, n => n.services({ serviceClass }))
    const gridBreakpoints = useGridBreakpoints(services?.length)
    const classes = useStyles()

    const handleSelected = (service: JDService) => selected && selected(service)
    const handleChecked = (service: JDService) => () => toggleSelected && toggleSelected(service);
    const serviceContent = (service: JDService) => content && content(service);
    const serviceActions = (service: JDService) => actions && actions(service);

    return (
        <Grid container spacing={2} className={classes.root}>
            {services?.map(service => <Grid key={service.id} item {...gridBreakpoints}>
                <ServiceListItem
                    service={service}
                    checked={handleSelected(service)}
                    toggleChecked={handleChecked(service)}
                    content={serviceContent(service)}
                    actions={serviceActions(service)}
                />
            </Grid>)}
        </Grid>
    )
}