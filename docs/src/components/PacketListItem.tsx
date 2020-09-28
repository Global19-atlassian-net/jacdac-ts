import React from 'react';
import { ListItem, Typography, ListItemIcon, makeStyles, Theme, createStyles, Badge, ListItemText } from '@material-ui/core';
import { Packet } from '../../../src/dom/packet';
import { printPacket, decodePacketData, deviceServiceName } from '../../../src/dom/pretty'
import KindIcon from './KindIcon';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        item: {
            marginBottom: 0,
            borderBottom: "1px solid #ddd",
        }
    })
);

export default function PacketListItem(props: {
    packet: Packet,
    skipRepeatedAnnounce?: boolean,
    showTime?: boolean,
    count?: number
}) {
    const { packet, skipRepeatedAnnounce, showTime, count } = props;
    const decoded = decodePacketData(packet);
    const text = printPacket(packet, { skipRepeatedAnnounce, showTime })
    const classes = useStyles()

    const primary = `${packet.friendlyCommandName}`
    const secondary = `${packet.is_command ? 'to' : 'from'} ${packet.friendlyDeviceName}/${packet.friendlyServiceName}`

    return <ListItem className={classes.item} dense={true}>
        <ListItemIcon>
            {count > 1 ? <Badge badgeContent={count}>
                <KindIcon kind={decoded?.info.kind} />
            </Badge> : <KindIcon kind={decoded?.info.kind} />}
        </ListItemIcon>
        <ListItemText
            primary={primary}
            secondary={secondary}
         />
    </ListItem>
}
