import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useMoralis } from "react-moralis";
import './Home.css';

export default function ButtonAppBar() {
    const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();
    const login = async () => {
        console.log('login')
        if (typeof window.ethereum === 'undefined'
            || (typeof window.web3 === 'undefined')) {

            // Web3 browser user detected. You can now use the provider.
            console.log('sada');
            window.alert('Please install metamast');
        }
        if (!isAuthenticated) {

            await authenticate({signingMessage: "Log in using Moralis" })
                .then(function (user) {
                    console.log("logged in user:", user);
                    console.log(user.get("ethAddress"));
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
    const logOut = async () => {
        await logout();
        console.log("logged out");
    }

    return (
        <div>
            <h1>Home page</h1>
            {/*<button onClick={login}>Moralis Metamask Login</button>*/}
            {/*<button onClick={logOut} disabled={isAuthenticating}>Logout</button>*/}
        </div>
    );
}