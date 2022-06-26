import React from "react";
import TextField from "@material-ui/core/TextField";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    fontSize:24,
    color: "white",
    backgroundColor: "",
    "&.Mui-focused": {
      color: "white",
      backgroundColor: ""
    },
    "&:before": {
      borderBottom: "2px solid green"
    },
    "&:hover:not(.Mui-focused):before": {
      borderBottom: "2px solid white !important"
    },
    "&:after": {
      // focused
      borderBottom: "2px solid white"
    }
  },
  input: {
    "&::selection": {
      backgroundColor: "lightgreen",
      color: "black"
    }
  }
});
const MyTextField = (props) => {
  const classes = useStyles();
  const {...rest } = props;
  return (
    <TextField
    InputProps={{ classes: classes }}
      {...rest}
      
      InputLabelProps={{ style: { fontSize: 20 } }}
    />
  );
};

export default MyTextField;
