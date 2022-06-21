import {InjectedConnector} from '@web3-react/injected-connector'
const injected = new InjectedConnector({ supportedChainIds: [1,4,137,80001,8001]});

export const connectors = {
    injected: injected
}