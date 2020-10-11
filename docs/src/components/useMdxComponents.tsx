import React from "react";
import { Link } from "gatsby-theme-material-ui";
import CodeDemo from "./CodeDemo";
import CodeBlock from './CodeBlock';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, useTheme } from "@material-ui/core";
import RandomGenerator from "./RandomGenerator"
import DeviceList from "./DeviceList"
import ServiceList from "./ServiceList"
import DeviceSpecificationList from "./DeviceSpecificationList"
import FilteredDeviceSpecificationList from "./FilteredDeviceSpecificationList"
import ServiceSpecificationList from "./ServiceSpecificationList"
import PacketsPreview from "./PacketsPreview"
import UpdateDeviceList from "./UpdateDeviceList";
import FlashButton from "./FlashButton";
import Widget from "../jacdac/Widget";
import ConnectButton from "../jacdac/ConnectButton"

export default function useMdxComponents() {
  const theme = useTheme();
  const mdxComponents: any = {
    CodeDemo: (props: any) => <CodeDemo {...props} />,
    Link: (props: any) => <Link color="textPrimary" {...props} />,
    a: (props: any) => <Link color="textPrimary" {...props} />,
    pre: props => <Box mb={theme.spacing(0.5)}><Paper>
      <div {...props} />
    </Paper></Box>,
    code: CodeBlock,
    table: props => <Box mb={theme.spacing(0.5)}><TableContainer component={Paper}>
      <Box m={theme.spacing(0.5)}>
        <Table size="small" {...props} />
      </Box>
    </TableContainer></Box>,
    thead: props => <TableHead {...props} />,
    tbody: props => <TableBody {...props} />,
    tr: props => <TableRow {...props} />,
    RandomGenerator: props => <Box displayPrint="none"><RandomGenerator {...props} /></Box>,
    DeviceList: props => <DeviceList {...props} />,
    ServiceList: props => <ServiceList {...props} />,
    DeviceSpecificationList: props => <DeviceSpecificationList {...props} />,
    FilteredDeviceSpecificationList: props => <FilteredDeviceSpecificationList {...props} />,
    ServiceSpecificationList: props => <ServiceSpecificationList {...props} />,
    PacketsPreview: props => <PacketsPreview {...props} />,
    UpdateDeviceList: props => <UpdateDeviceList {...props} />,
    FlashButton: props => <FlashButton {...props} />,
    Widget: props => <Widget {...props} />,
    ConnectButton: props => <ConnectButton {...props} />
  };

  return mdxComponents;
}