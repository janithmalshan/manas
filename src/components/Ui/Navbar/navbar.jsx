import React from 'react';
import './navbar.scss'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import logo from '../../../assets/AnimeD.png'
import chevron from '../../../assets/ic-down.svg'

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    toolbar: {
        justifyContent: 'space-between'
    }
}));

export default function MenuAppBar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="ui-navbar">
            <AppBar position="static">
                <Toolbar variant="dense" className={classes.toolbar}>
                    <img src={logo} alt="logo" height={60}/>
                        <div>
                            <div className="ui-navbar__user">
                                <img className="ui-navbar__user-img" src="https://techcrunch.com/wp-content/uploads/2015/09/11667534_10102203860243201_2713296330820668368_n.jpg?w=528"/>
                                <div className="ui-navbar__user-name">Larry Davis</div>
                                <IconButton
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                >
                                    <img src={chevron} className="ui-navbar__user-btn"/>
                                </IconButton>
                            </div>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                            </Menu>
                        </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

// import React, {Component} from "react";
//
// export class Navbar extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             active: true,
//         };
//     }
//
//     render() {
//         return (
//             <header className="ui-navbar">
//                 <a href="/" className="ui-navbar__logo">000000000000
//                 </a>
//             </header>
//         )
//     }
// }

// const NavLink = (props) => {
//     return (
//         <a href={props.href} className="ui-navbar__menu-link">{props.link}</a>
//     )
// };
