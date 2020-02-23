import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import PlayArrowIcon from '@material-ui/icons/PlayArrow'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
          },
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    button: {
        padding: '14px, 40px',
    }
}))
const UserInput = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <TextField 
            label="Event Name"
            variant="filled"
            margin="normal"
            value={props.name}
            onChange={props.onNameChange}
            />
           <TextField
           className={classes.textField}
           label="Event Date"
           margin="normal"
           type="date"
           variant="filled"
           value={props.date}
           onChange={props.onDateChange}
           />
           <TextField
           className={classes.textField}
           label="Event Time"
           margin="normal"
           type="time"
           variant="filled"
           value={props.time}
           onChange={props.onTimeChange}
           />
           <Button 
           className={classes.button}
           variant="contained"
           endIcon={<PlayArrowIcon />}
           onClick={props.onButtonClick}
           >
            Start
          </Button>
        </div>
    )
}

export default UserInput;