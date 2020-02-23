import React, { useEffect, useState, Fragment } from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    countDownWrapper: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    countdownItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        lineHeight: '2rem',
        margin: '0.5rem',
        paddingTop: '0.5rem',
        position: 'relative',
        width: 100,
        height: 100,
        textTransform: 'uppercase',
        color: '#111',
        border: '0.2rem solid',
        borderRadius: '0.3rem',
        borderStyle: 'double'
    },
    countdownTitle: {
        letterSpacing: '0.2rem',
        textAlign: 'center',
        textTransform: 'uppercase',
        
    }
}))

const CountdownTimer = (props) => {
    const classes = useStyles();

    const [days, setDays] = useState('');
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [seconds, setSeconds] = useState('');

    useEffect(() => {

        if (!props.date) {
           return; 
        }
        const startTimer = setInterval(() => {
            const initial = new Date(props.date).getTime();
            const now = new Date().getTime();
            const distance = initial - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60 * 60 * 24)) / 1000);
            setDays(days);
            setHours(hours);
            setMinutes(minutes);
            setSeconds(seconds);
        }, 1000);

        return () => clearInterval(startTimer);
    },[props.date])
    return (
        <div className={classes.root}>
            <div className={classes.countdownTitle}>
             <p>{props.name}</p>
            </div>
            {days !== '' && (
            <Fragment>
            <div className={classes.countDownWrapper}>
            <div className={classes.countdownItem}>
                {days}
                <p>Days</p>
            </div>
            <div className={classes.countdownItem}>
                {hours}
                <p>Hours</p>
            </div>
           
            <div className={classes.countdownItem}>
                {minutes}
                <p>Minutes</p>
            </div>
   
            
            <div className={classes.countdownItem}>
                {seconds}
                <p>Seconds</p>
            </div>
            </div>
            </Fragment>
            )} 
        </div>
    )
}

export default CountdownTimer;