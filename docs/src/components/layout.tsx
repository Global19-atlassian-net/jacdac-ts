/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useContext } from "react"
import clsx from 'clsx';
import { makeStyles, useTheme, Switch, FormControlLabel, FormGroup, Container } from '@material-ui/core';
// tslint:disable-next-line: no-submodule-imports
import { Link, IconButton, Button } from 'gatsby-theme-material-ui';
// tslint:disable-next-line: no-submodule-imports
import CssBaseline from '@material-ui/core/CssBaseline';
// tslint:disable-next-line: no-submodule-imports
import AppBar from '@material-ui/core/AppBar';
// tslint:disable-next-line: no-submodule-imports
import Toolbar from '@material-ui/core/Toolbar';
// tslint:disable-next-line: no-submodule-imports
import Typography from '@material-ui/core/Typography';
// tslint:disable-next-line: no-submodule-imports
import Drawer from '@material-ui/core/Drawer'
import ConnectButton from '../jacdac/ConnectButton';
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import HistoryIcon from '@material-ui/icons/History';
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import Divider from '@material-ui/core/Divider';
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import MenuIcon from '@material-ui/icons/Menu';
import { useStaticQuery, graphql } from "gatsby"
import JacdacProvider from "../jacdac/Provider"
import ErrorSnackbar from "./ErrorSnackbar"
import Toc from "./Toc"
import PacketList from "./PacketList"
import { serviceSpecificationFromClassIdentifier } from "../../../src/dom/spec"
import UpdateIcon from '@material-ui/icons/Update';

// tslint:disable-next-line: no-import-side-effect
import "./layout.css"
// tslint:disable-next-line: no-submodule-imports
import Alert from "@material-ui/lab/Alert";
import { PacketFilterProvider } from "./PacketFilterContext";
import SEO from "./seo";

const drawerWidth = `${40}rem`;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth})`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}`,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  footerLink: {
    marginRight: theme.spacing(0.5)
  }
}));

export default function Layout(props: { pageContext?: any; children: any; }) {
  const { pageContext, children } = props;
  return (
    <JacdacProvider>
      <PacketFilterProvider>
        <LayoutWithContext {...props}>
        </LayoutWithContext>
      </PacketFilterProvider>
    </JacdacProvider>
  )
}


function LayoutWithContext(props: { pageContext?: any; children: any; }) {
  const { pageContext, children } = props;
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [drawerConsole, setDrawerConsole] = useState(false);
  const serviceClass = pageContext?.node?.classIdentifier;
  const service = serviceClass !== undefined && serviceSpecificationFromClassIdentifier(serviceClass)

  const handleDrawerToc = () => {
    setDrawerConsole(false)
    setOpen(true);
  }
  const handleDrawerConsole = () => {
    setDrawerConsole(true);
    setOpen(true);
  }
  const handleDrawerClose = () => {
    setOpen(false);
  }

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allJacdacTsJson {
        nodes {
          version
        }
      }
    }
  `)

  return (
    <div className={classes.root}>
      <SEO />
      <CssBaseline />
      <AppBar position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open table of contents"
            onClick={handleDrawerToc}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          > <MenuIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="open console"
            onClick={handleDrawerConsole}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          > <HistoryIcon />
          </IconButton>
          <Typography variant="h6">
            <Link className={classes.menuButton} href="/jacdac-ts" color="inherit">{data.site.siteMetadata.title}</Link>
          </Typography>
          <div className={clsx(classes.menuButton)}><ConnectButton /></div>
          <IconButton
            color="inherit"
            aria-label="updater"
            to="/tools/updater"
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          > <UpdateIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          {serviceClass !== undefined && <Alert severity="info">{`Filtered for ${service?.name || serviceClass.toString(16)}`}</Alert>}
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        {drawerConsole ? <PacketList serviceClass={serviceClass} /> : <Toc />}
      </Drawer>
      <Container maxWidth={open ? "lg" : "sm"}>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <Typography>
            {children}
          </Typography>
          <footer>
            <Divider />
            <Link className={classes.footerLink} target="_blank" to={`https://github.com/microsoft/jacdac-ts/tree/v${data.allJacdacTsJson.nodes[0].version}`}>JACDAC-TS v{data.allJacdacTsJson.nodes[0].version}</Link>
            <Link className={classes.footerLink} to="https://makecode.com/privacy" target="_blank" rel="noopener">Privacy &amp; Cookies</Link>
            <Link className={classes.footerLink} to="https://makecode.com/termsofuse" target="_blank" rel="noopener">Terms Of Use</Link>
            <Link className={classes.footerLink} to="https://makecode.com/trademarks" target="_blank" rel="noopener">Trademarks</Link>
          © {new Date().getFullYear()} Microsoft Corporation
        </footer>
        </main>
      </Container>
      <ErrorSnackbar />
    </div>
  )
}
