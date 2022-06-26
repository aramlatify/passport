import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
// import { InputAdornment } from "@material-ui/core";
// import DateIcon from "@material-ui/icons/CalendarToday";
import './date.css';

const useStyles = makeStyles((theme) => ({
 
    
    container: {
      display: "grid",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 100,
      
    },
    pointer: {
        border: '1px solid #e2e2e1',
                overflow: 'hidden',
                borderRadius: 0,
                backgroundColor: 'white',
                
        cursor: "pointer",
          backgroundColor: "",
        
        "&::-webkit-calendar-picker-indicator": {
            
        }
      },
    input: {
        color: 'white'
    },
    underline: {
        "&:before": {
          borderBottom: "2px solid green"
        },
        "&:hover:not($focused):not($error):before": {
          borderBottom: "2px solid white !important"
        },
        "&:after": {
          borderBottom: "2px solid white"
        },
        "& .MuiFormLabel-root": {
          color: "white" // or black
      },
      disabled: {},
      focused: {},
      error: {}}
  })
);

export default function DatePickers() {
  const classes = useStyles();

  return (
    <form className="range-picker" noValidate>
      <TextField
        id="date"
        label="بەرواری سەردان"
        type="date"
        defaultValue=""
        className={classes.textField ,classes.underline}
        
        InputProps={{
          classes: { input: classes.pointer }
          // startAdornment: (
          //   <InputAdornment position="start">
          //     <DateIcon />
          //   </InputAdornment>
          // )
        },{ classes: {underline: classes.underline} }}
        InputLabelProps={{
          shrink: true
        }}
      />
    </form>
  );
}
