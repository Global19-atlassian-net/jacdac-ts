import React, { useContext, useState, ChangeEvent } from 'react';
import JacdacContext from '../../../src/react/Context';
// tslint:disable-next-line: no-submodule-imports
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
// tslint:disable-next-line: no-submodule-imports
import TreeView from '@material-ui/lab/TreeView';
// tslint:disable-next-line: no-submodule-imports
import TreeItem, { TreeItemProps } from '@material-ui/lab/TreeItem';
// tslint:disable-next-line: no-submodule-imports
import Typography from '@material-ui/core/Typography';
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import KindIcon from "./KindIcon"
import { JDDevice } from '../../../src/dom/device';
import { JDEvent } from '../../../src/dom/event';
import { JDService } from '../../../src/dom/service';
import { JDRegister } from '../../../src/dom/register';
import useChange from "../jacdac/useChange";
import { isRegister, isEvent, isReading } from '../../../src/dom/spec';
import { Switch, IconButton } from '@material-ui/core';
import useRegisterValue from '../jacdac/useRegisterValue';
import useEventCount from '../jacdac/useEventCount';

declare module 'csstype' {
    interface Properties {
        '--tree-view-color'?: string;
        '--tree-view-bg-color'?: string;
    }
}

const useTreeItemStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            color: theme.palette.text.secondary,
            '&:hover > $content': {
                backgroundColor: theme.palette.action.hover,
            },
            '&:focus > $content, &$selected > $content': {
                backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
                color: 'var(--tree-view-color)',
            },
            '&:focus > $content $label, &:hover > $content $label, &$selected > $content $label': {
                backgroundColor: 'transparent',
            },
        },
        content: {
            color: theme.palette.text.secondary,
            borderTopRightRadius: theme.spacing(2),
            borderBottomRightRadius: theme.spacing(2),
            paddingRight: theme.spacing(1),
            fontWeight: theme.typography.fontWeightMedium,
            '$expanded > &': {
                fontWeight: theme.typography.fontWeightRegular,
            },
        },
        group: {
            marginLeft: 0,
            '& $content': {
                paddingLeft: theme.spacing(2),
            },
        },
        expanded: {},
        selected: {},
        label: {
            fontWeight: 'inherit',
            color: 'inherit',
        },
        labelRoot: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0.5, 0),
        },
        labelIcon: {
            marginRight: theme.spacing(1),
        },
        labelText: {
            fontWeight: 'inherit',
            flexGrow: 1,
        },
    }),
);

function StyledTreeItem(props: TreeItemProps & {
    bgColor?: string;
    color?: string;
    kind?: string;
    labelInfo?: string;
    labelText: string;
    checked?: boolean;
    setChecked?: (state: boolean) => void;
    actions?: JSX.Element | JSX.Element[]
}) {
    const classes = useTreeItemStyles();
    const { labelText, kind, labelInfo, color, bgColor, checked, setChecked, actions, ...other } = props;
    const [checkedState, setCheckedState] = useState(false)

    const handleChecked = (ev: ChangeEvent<HTMLInputElement>, c: boolean) => {
        ev.stopPropagation()
        setChecked(c)
        setCheckedState(c)
    }
    return (
        <TreeItem
            label={
                <div className={classes.labelRoot}>
                    {setChecked && <Switch
                        checked={checkedState}
                        color="primary"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                        onChange={handleChecked}
                    />}
                    <KindIcon kind={kind} className={classes.labelIcon} />
                    <Typography variant="body2" className={classes.labelText}>
                        {labelText}
                    </Typography>
                    <Typography variant="caption" color="inherit">
                        {labelInfo}
                        {actions}
                    </Typography>
                </div>
            }
            style={{
                '--tree-view-color': color,
                '--tree-view-bg-color': bgColor,
            }}
            classes={{
                root: classes.root,
                content: classes.content,
                expanded: classes.expanded,
                selected: classes.selected,
                group: classes.group,
                label: classes.label,
            }}
            {...other}
        />
    );
}

const useStyles = makeStyles(
    createStyles({
        root: {
            flexGrow: 1,
        },
    }),
);

interface DomTreeViewItemProps {
    key: string;
    expanded: string[];
    selected: string[];
    checked?: { [id: string]: boolean }
    setChecked?: (id: string, value: boolean) => void;
}

function DeviceTreeItem(props: { device: JDDevice } & DomTreeViewItemProps & DomTreeViewProps) {
    const { device, checked, setChecked, checkboxes, serviceFilter, ...other } = props
    const id = device.id
    const name = device.name
    const services = useChange(device, () => device.services().filter(srv => !serviceFilter || serviceFilter(srv)))

    const readings = services
        .filter(service => service.specification?.packets.some(pkt => isReading(pkt)))
        .map(service => service.name)
        .join(',')

    const handleChecked = c => setChecked(id, c)
    const handleIdentify = (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        ev.stopPropagation()
        device.identify()
    }
    return <StyledTreeItem
        nodeId={id}
        labelText={name}
        labelInfo={readings}
        kind={"device"}
        checked={checked && checked[id]}
        setChecked={checkboxes && checkboxes.indexOf("device") > -1 && setChecked && handleChecked}
        actions={
            <IconButton aria-label="identify" title="identify" size="small" onClick={handleIdentify}>
                <FingerprintIcon />
            </IconButton>
        }
    >
        {services?.map(service => <ServiceTreeItem
            key={service.id}
            service={service}
            checked={checked}
            setChecked={setChecked}
            checkboxes={checkboxes}
            {...other}
        />)}
    </StyledTreeItem>
}

function ServiceTreeItem(props: { service: JDService } & DomTreeViewItemProps & DomTreeViewProps) {
    const { service, checked, setChecked, checkboxes, registerFilter, eventFilter, ...other } = props;
    const specification = service.specification;
    const id = service.id
    const name = service.name
    const packets = useChange(service, () => specification?.packets)
    const registers = packets?.filter(isRegister)
        .map(info => service.register(info.identifier))
        .filter(reg => !registerFilter || registerFilter(reg))
    const events = packets?.filter(isEvent)
        .map(info => service.event(info.identifier))
        .filter(ev => !eventFilter || eventFilter(ev))
    const readingPacket = packets?.find(reg => isReading(reg))
    const reading = useRegisterValue(service.device, service.service_number, readingPacket?.identifier)

    const handleChecked = c => setChecked(id, c)
    return <StyledTreeItem
        nodeId={id}
        labelText={name}
        labelInfo={reading?.humanValue}
        kind={"service"}
        checked={checked && checked[id]}
        setChecked={checkboxes?.indexOf("service") > -1 && setChecked && handleChecked}
    >
        {registers?.map(register => <RegisterTreeItem
            key={register.id}
            register={register}
            checked={checked}
            setChecked={setChecked}
            checkboxes={checkboxes}
            {...other}
        />)}
        {events?.map(event => <EventTreeItem
            key={event.id}
            event={event}
            checked={checked}
            setChecked={setChecked}
            checkboxes={checkboxes}
            {...other}
        />)}
    </StyledTreeItem>
}

function RegisterTreeItem(props: { register: JDRegister } & DomTreeViewItemProps & DomTreeViewProps) {
    const { register, checked, setChecked, checkboxes } = props;
    const { specification, id } = register
    useRegisterValue(register.service.device, register.service.service_number, register.address, 500)

    const handleChecked = c => {
        setChecked(id, c)
    }
    return <StyledTreeItem
        nodeId={id}
        labelText={specification?.name || register.id}
        labelInfo={register.humanValue}
        kind={specification?.kind || "register"}
        checked={checked && checked[id]}
        setChecked={checkboxes?.indexOf("register") > -1 && setChecked && handleChecked}
    />
}

function EventTreeItem(props: { event: JDEvent } & DomTreeViewItemProps & DomTreeViewProps) {
    const { event, checked, setChecked, checkboxes } = props;
    const { specification, id } = event
    const count = useEventCount(event)

    const handleChecked = c => {
        setChecked(id, c)
    }
    return <StyledTreeItem
        nodeId={id}
        labelText={specification?.name || event.id}
        labelInfo={(count || "") + ""}
        kind="event"
        checked={checked && checked[id]}
        setChecked={checkboxes?.indexOf("event") > -1 && setChecked && handleChecked}
    />
}

export type CheckedMap = { [id: string]: boolean };

export interface DomTreeViewProps {
    defaultChecked?: CheckedMap;
    checkboxes?: ("device" | "service" | "register" | "event")[];
    onSelect?: (selected: string[]) => void;
    onChecked?: (checked: CheckedMap) => void;
    deviceFilter?: (devices: JDDevice) => boolean;
    serviceFilter?: (services: JDService) => boolean;
    registerFilter?: (register: JDRegister) => boolean;
    eventFilter?: (event: JDEvent) => boolean;
}

export default function DomTreeView(props: DomTreeViewProps) {
    const { onChecked, defaultChecked, onSelect, checkboxes, deviceFilter, ...other } = props;
    const classes = useStyles();
    const [expanded, setExpanded] = useState<string[]>([]);
    const [selected, setSelected] = useState<string[]>([]);
    const [checked, setChecked] = useState<{ [id: string]: boolean }>(defaultChecked || {})
    const { bus } = useContext(JacdacContext)
    const devices = useChange(bus, () => bus.devices().filter(dev => !deviceFilter || deviceFilter(dev)))

    const handleToggle = (event: React.ChangeEvent<{}>, nodeIds: string[]) => {
        setExpanded(nodeIds);
    };

    const handleSelect = (event: React.ChangeEvent<{}>, nodeIds: string[]) => {
        setSelected(nodeIds);
        if (onSelect) onSelect(nodeIds)
    };
    const handleChecked = (id: string, v: boolean) => {
        checked[id] = v;
        setChecked(checked)
        if (onChecked)
            onChecked(checked)
    };

    return (
        <TreeView
            className={classes.root}
            defaultCollapseIcon={<ArrowDropDownIcon />}
            defaultExpandIcon={<ArrowRightIcon />}
            defaultEndIcon={<div style={{ width: 24 }} />}
            expanded={expanded}
            selected={selected}
            onNodeToggle={handleToggle}
            onNodeSelect={handleSelect}
        >
            {devices?.map(device => <DeviceTreeItem
                key={device.id}
                device={device}
                checked={checked}
                setChecked={handleChecked}
                checkboxes={checkboxes}
                expanded={expanded}
                selected={selected}
                {...other}
            />)}
        </TreeView>
    );
}