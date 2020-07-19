import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import HelpIcon from '@material-ui/icons/Help';
import React from "react";

export const TopNavbar = ({onClick}) => {
  return <AppBar position="static" color="primary">
    <Toolbar variant="dense">
      <IconButton onClick={onClick}>
        <HelpIcon/>
      </IconButton>
    </Toolbar>
  </AppBar>;
};