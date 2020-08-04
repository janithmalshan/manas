import React from 'react';
import './options.scss'
import icon from "../../../assets/ic-expand.svg";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'transparent',
        padding: '6px 0 0',
        width: 44,
        height: 44,
        boxSizing: 'border-box',
        position: 'absolute',
        top: 24,
        left: 24,
        zIndex: 99,
    },
}));

export default function Options() {
    const classes = useStyles();

    return (
        <div className="ui-option">
            <IconButton className={classes.root} component="a">
                <img src={icon} alt="back"/>
            </IconButton>
        </div>
    );
}
