import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { MoralisProvider } from "react-moralis";
import {ethers} from 'ethers';
import {Web3ReactProvider} from '@web3-react/core'

const getLibrary = (provider) => {
  console.log('library', provider);
  return new ethers.providers.Web3Provider(provider);
}
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
            <MoralisProvider serverUrl="https://xmzqresdqbkz.usemoralis.com:2053/server" appId="zgf0gwOUEtzUcKPmjcx8Iiz4xHKpRiIdpntnNajL">
            <Web3ReactProvider getLibrary={getLibrary}>
             <App />
             </Web3ReactProvider>
            </MoralisProvider>
        </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
