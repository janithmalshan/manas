import React from 'react';
import './window.scss'
import back from '../../../assets/ic-w-back.svg'
import icon from '../../../logo.svg'
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#f0f0f0',
        padding: '14px 0',
        width: 48,
        height: 48,
        boxSizing: 'border-box',
        position: 'absolute',
        top: 24,
        left: 24,
        zIndex: 99,

        '&:hover': {
            backgroundColor: '#c0c0c0',
            boxShadow: 'none',
        },
    },
}));

export default function Window() {
    const classes = useStyles();

    return (
        <div className="ui-window">
            <IconButton className={classes.root} component="a">
                <img src={back} alt="back"/>
            </IconButton>

            <Scaler>
                <img src={icon} height={300}/>
            </Scaler>
        </div>
    );
}

const Scaler = (props) => {
    return (
        <div className="ui-window__scale">
            <div className="ui-window__scale-top"/>
            <div className="ui-window__scale-right"/>
            <div className="ui-window__scale-bottom"/>
            <div className="ui-window__scale-left"/>
            {props.children}
        </div>
    )
};
