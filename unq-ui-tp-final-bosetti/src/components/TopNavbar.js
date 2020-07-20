import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import HelpIcon from '@material-ui/icons/Help';
import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export const TopNavbar = ({onClick}) => {
  return <AppBar position="static" color="primary">
    <Toolbar variant="dense">
      <IconButton onClick={onClick}>
        <HelpIcon/>
      </IconButton>
      <Typography component={'span'}>
        <Box fontSize="2.5vh">Rock / Paper / Scissors / Lizard / Spock</Box>
      </Typography>
    </Toolbar>
  </AppBar>;
};