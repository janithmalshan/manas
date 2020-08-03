import React from 'react';
import {styled} from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const ButtonDefault = styled(Button)({
    fontSize: '14px',
    height: 40,
    minWidth: '115px',
    borderRadius: '4px',
    boxShadow: 'unset',
    padding: '0 25px',
    textTransform: 'unset',
    fontWeight: 'bold',
});
const ButtonAuth = styled(Button)({
    fontSize: '16px',
    height: 50,
    borderRadius: '4px',
    margin: '8px 0',
    lineHeight: '19px',
    textTransform: 'unset',
    padding: '14px 16px 17px',
    fontFamily: [
        'Gelion',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    borderWidth: '2px',
    '&:hover': {
        borderWidth: '2px',
    },
    '&:active': {
        borderWidth: '2px',
    },
    '&:focus': {
        borderWidth: '2px',
    },
});
const ButtonDelete = styled(Button)({
    fontSize: '14px',
    height: 30,
    minWidth: '83px',
    borderRadius: '4px',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    border: 'solid 1px #eef0f2',
    padding: '0 15px',
    margin: '5px auto',
    textTransform: 'unset',
    fontWeight: '500',
    color: '#f9724e',
    backgroundColor: '#ffffff'
});
const ButtonSelect = styled(Button)({
    fontSize: '14px',
    height: 30,
    minWidth: '83px',
    borderRadius: '4px',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    border: 'solid 1px #eef0f2',
    padding: '0 15px',
    margin: '5px auto',
    textTransform: 'unset',
    fontWeight: '500',
    color: '#8c95a8',
    backgroundColor: '#ffffff',
});

export {ButtonDefault};
export {ButtonAuth};
export {ButtonDelete};
export {ButtonSelect};
