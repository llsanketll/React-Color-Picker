import React from "react";
import { withStyles } from "@material-ui/styles";

const primary = {
  fontFamily: "inherit",
  margin: "0 .5rem",
  color: props => props.fontColor,
  fontSize: "1rem",
  background: props => props.color,
  border: "3px solid crimson",
  borderRadius: "1rem",
  fontWeight: "bold",

}

const secondary = {
  fontFamily: "inherit",
  margin: "0 .5rem",
  color: props => props.fontColor,
  fontSize: "1rem",
  background: props => props.color,
  border: props => `3px solid ${props.color}`,
  borderRadius: "1rem",
  fontWeight: "bold",
}


const styles = {
  root: {
    width: "10rem",
    height: "3rem",
    outline: "none",
    display: "inline-block",
    cursor: "pointer",
    ...secondary,
    border: "none",
  },


};



function Button(props) {
  const { classes, onClick } = props;
  return (
    <button
      className={classes.root}
      disabled={props.disabled}
      onClick={onClick}>
      {props.children}
    </button>
  );
}

export default withStyles(styles)(Button);
