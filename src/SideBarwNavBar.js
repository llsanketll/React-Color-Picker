import React, { useState } from "react";
import { withStyles } from "@material-ui/styles";
import { ReactComponent as MenuIcon } from "./menu.svg";
import { CSSTransition } from "react-transition-group";
import { ReactComponent as ArrowIcon } from "./arrow.svg";
import DrawerForm from "./DrawerForm";
import NavMetaForm from "./NavMetaForm";
import { NavLink } from "react-router-dom";

const drawerWidth = "400px";

const styles = {
  root: {
    "& main": {
      position: "absolute",
      top: "8vh",
      height: "92vh",
      width: "100%",
      left: 0,
      transition: "left 300ms ease, width 300ms ease",
    },
  },

  navBar: {
    background: "#E5E5E5",
    width: "100vw",
    height: "8vh",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 1rem",
  },

  MenuIcon: {
    color: "crimson",
    cursor: "pointer",
  },

  drawer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    width: drawerWidth,
    height: "100vh",
    background: "#E5E5E5",
    transition: "width 300ms ease",

    "&.drawer-enter": {
      transform: "translateX(-110%)",
    },
    "&.drawer-enter-active": {
      transform: "translateX(0)",
      transition: "transform 300ms ease",
    },
    "&.drawer-exit": {
      transform: "translateX(0)",
    },
    "&.drawer-exit-active": {
      transform: "translateX(-110%)",
      transition: "transform 300ms ease",
    },
  },

  drawerTop: {
    width: "100%",
    height: "10vh",
    padding: ".5rem",
    display: "flex",
    borderBottom: "2px solid #0000001a",
    justifyContent: "flex-end",
  },

  ArrowIcon: {
    color: "crimson",
    cursor: "pointer",
    transform: "rotate(90deg)",
  },

  back: {
    fontFamily: "inherit",
    color: "royalblue",
    border: "2px solid royalblue",
    margin: "0 1rem 0 auto",
    padding: "0 .5rem",
    textDecoration: "none",
    borderRadius: "5px",
    fontWeight: "500",
  },
};

function SideBarwNavBar(props) {
  const [open, setOpen] = useState(true);
  const { classes } = props;

  const handleClick = () => {
    setOpen(!open);
  };

  const handleSavePalette = (paletteName, emoji) => {
    props.handleSavePalette(paletteName, emoji);
  };

  const clearPalette = () => {
    props.clearPalette();
  };

  const shiftMain = open
    ? { left: drawerWidth, width: `calc(100% - ${drawerWidth})` }
    : {};

  return (
    <div className={classes.root}>
      <CSSTransition
        in={open}
        timeout={300}
        unmountOnExit
        classNames={"drawer"}>
        <div className={classes.drawer}>
          <div className={classes.drawerTop}>
            <ArrowIcon onClick={handleClick} className={classes.ArrowIcon} />
          </div>
          <DrawerForm
            clearPalette={clearPalette}
            paletteList={props.paletteList}
            addColor={props.addColor}
            colorList={props.colorList}
          />
        </div>
      </CSSTransition>
      <nav className={classes.navBar}>
        <MenuIcon className={classes.MenuIcon} onClick={handleClick} />
        <NavLink to={`${process.env.PUBLIC_URL}/`} className={classes.back}>
          Back
        </NavLink>
        <NavMetaForm
          handleClick={handleClick}
          handleSavePalette={handleSavePalette}
          paletteList={props.paletteList}
        />
      </nav>
      <main style={shiftMain}>{props.children}</main>
    </div>
  );
}
export default withStyles(styles)(SideBarwNavBar);
