import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import {ethers} from 'ethers';
import {Web3ReactProvider} from '@web3-react/core'
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#7C2AE8',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#00C4CC',
    },
  },
});

const getLibrary = (provider) => {
  return new ethers.providers.Web3Provider(provider);
}
ReactDOM.render(
     <ThemeProvider theme={theme}>
        <Provider store={store}>
            <BrowserRouter>
                <Web3ReactProvider getLibrary={getLibrary}>
                <App />
                </Web3ReactProvider>
            </BrowserRouter>
        </Provider>
    </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
