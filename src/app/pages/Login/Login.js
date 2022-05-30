import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import { CircularProgress, Dialog, DialogContent, DialogTitle } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useWeb3React } from '@web3-react/core';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import login1img from "../../../assets/images/login/login1-img.png";
import Logo from "../../../assets/images/Logo.png";
import { authenticate, getNonce } from '../../api/core';
import { connectors } from '../../utils/connectors';
export default function Login(props){

    const {active, activate, deactivate, library, account} = useWeb3React();
    const [loading, setLoading] = useState(false);
    const navigate = useHistory()

    async function signMessage (signer){
        getNonce({public_key: account})
        .then( async(res)=> {
            if(res?.data?.nonce){
             const signature = await signer.signMessage(`I am going to sign in to flume: ${res.data.nonce}`);
                authenticate({public_key: account, signature })
                .then(response => {
                    if(response?.data?.token){
                        
                        const token = response.data.token;
                        const notifyToken = response.data.notif_token; 
                        localStorage.setItem('flume_auth_token', token);
                        localStorage.setItem('flume_notify_token', notifyToken);
                        // axios.defaults.headers.common.Authorization = `Bearer ${token}`;
                           setLoading(false);
                        navigate.push('/view-collections')
                    }
                })
                .catch(err => {
                    console.error(err);
                })
             
            }
        })
        .catch(err => {
            console.error(err);
        })
  
    }

    useEffect( ()=>{
        if(library ){
            const signer = library.getSigner();
            signMessage(signer);
        }
    },[library])


    async function connectMetaMask(){
        if(!active) {
            setLoading(true);
           const data = await activate(connectors.injected);
        }
        
    }
    const renderLoginConfirmation = () => {
        return (
                <Dialog onClose={()=>setLoading(false)} open={loading}>
                    <DialogTitle>
                        <IconButton
                            aria-label="close"
                            onClick={()=>setLoading(false)}
                            sx={{
                                position: 'absolute',
                                right: 8,
                                top: 8,
                                color: (theme) => theme.palette.grey[500],
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                    </DialogTitle>
                    <DialogContent>
                        <div className="p-16 text-center">
                            <CircularProgress />
                            <div className="mt-8">
                                <h1 className="font-bold"> Waiting For Confirmation</h1>
                                <p className="mt-2 text-base"> Sign in with Metamask</p>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
        )
    }
    return (
        <>
            <div className="flex items-center justify-center h-screen bg-gray-50 bg-login1">
            <section class="text-third lg:w-2/6 md:w-3/6 w-5/6 mx-auto align-middle">
            <div class="w-full text-center py-8">
                <a href="/"><img src={Logo} class="mx-auto"  /></a>
            </div>
            <div class="p-8 bg-white shadow-xl rounded-xl">
            <h2 class="text-center mb-6 font-semibold text-2xl">Login</h2>
            <div class="container flex flex-row p-7 m-1 border-2 border-gray-300 rounded-lg cursor-pointer" onClick={() => connectMetaMask()}>
            <div class="w-fit flex items-center"><img src={login1img} /></div>
            <div class="flex-grow px-5"><h4 class="font-bold text-lg">Metamask</h4><p class="font-light">Connect your browser wallet</p></div>
            <div class="flex item-center"><button> <ArrowForwardIosIcon  /></button></div>
            </div>
            
            <div class="w-full text-center">
            <p class="mx-auto text-sm pt-5">Don't have a wallet? <span class="text-primary"><a href="https://metamask.io/" target="_blank" rel="noreferrer">Download here</a></span></p>
            </div>
            </div>
            <div class="text-center py-8">
            <p class="tex-sm mx-auto w-fit">By using this app you are accepting these <span class="text-primary underline">
                <a href="https://docs-flume.gitbook.io/flume/flume/terms-of-service" target="_blank" rel="noreferrer" >terms</a></span></p>
            </div>
            </section>
            </div>
            {renderLoginConfirmation()}
        </>
    )
}