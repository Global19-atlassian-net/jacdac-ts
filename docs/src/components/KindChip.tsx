import React, { useContext } from "react"
import { Chip } from "@material-ui/core";
import KindIcon, { kindName } from "./KindIcon";
import PacketsContext from "./PacketsContext"
import AppContext, { DrawerType } from "./AppContext"

export default function KindChip(props: { kind: string, className?: string }) {
    const { kind, className } = props;
    const { filter, setFilter } = useContext(PacketsContext);
    const { setDrawerType }  = useContext(AppContext)
    const icon = KindIcon({ kind })
    const chipFilter = `kind:${kind}`
    const filtered = filter && filter.indexOf(chipFilter) > 1
    const handleClick = () => {
        if (filtered)
            setFilter(filter?.replace(chipFilter, ''))
        else
            setFilter(filter + ' ' + chipFilter)
        setDrawerType(DrawerType.Packets)
    }
    return <Chip onClick={handleClick} className={className} size="small" label={kindName(kind)} icon={icon} />
}