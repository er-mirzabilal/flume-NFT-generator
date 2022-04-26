import React, {useEffect, useState} from 'react'
import { useMoralis } from "react-moralis";
import Logo from "../../../assets/images/Logo.png";
import login1img from "../../../assets/images/login/login1-img.png";
import login2img from "../../../assets/images/login/login2-img.png";
import login3img from "../../../assets/images/login/login3-img.png";
import {useNavigate} from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {CircularProgress, Dialog, DialogContent, DialogTitle} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import CloseIcon from '@mui/icons-material/Close';

export default function Login(props){
    const {
        authenticate,
        isWeb3Enabled,
        isAuthenticated,
        logout,
        user,
        enableWeb3,
        Moralis,
    } = useMoralis();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    async  function connectMetaMask(){
        if(!isAuthenticated) {
            setLoading(true);
            await authenticate({signingMessage: "Hello Mirza"});
            setLoading(false);
            navigate('/view-collections');
        }
    }
    async function authWalletConnect() {
        const user =  await authenticate({
            provider: "walletconnect",
            mobileLinks: [
              "metamask",
              "trust",
              // "rainbow",
              // "argent",
              // "imtoken",
              // "pillar",
            ],
            signingMessage: "Welcome!",
        });
        console.log('user', user);
        navigate('/view-collections');
    }
    useEffect(() => {
        if (!isWeb3Enabled && isAuthenticated) {
            enableWeb3({ provider: "walletconnect"});
            console.log("web3 activated");
        }
    }, [isWeb3Enabled, isAuthenticated, enableWeb3]);

    document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "hidden") {
            window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
        }
    });
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
            <div className="flex items-center justify-center h-screen bg-contain bg-gray bg-login1">
            <section class="text-third lg:w-2/6 md:w-3/6 w-5/6 mx-auto align-middle">
            <div class="w-full text-center py-8">
                <a href="/"><img src={Logo} class="mx-auto"  /></a>
            </div>
            <div class="p-8 bg-white shadow-lg rounded-xl">
            <h2 class="text-center mb-6 font-semibold text-xl">Login</h2>
            <div class="container flex flex-row p-7 m-1 border-third border-2 border-gray-200 cursor-pointer" onClick={() => connectMetaMask()}>
            <div class="w-fit contents"><img src={login1img} /></div>
            <div class="flex-grow px-5"><h4 class="font-bold text-lg">Metamask</h4><p class="font-light">Connect your browser wallet</p></div>
            <div class="flex item-center"><button> <ArrowForwardIosIcon  /></button></div>
            </div>
            <div class="container flex flex-row p-7 m-1 border-third border-2 border-gray-200 cursor-pointer" onClick={() => authWalletConnect()}>
            <div class="w-fit contents"><img src={login2img} /></div>
            <div class="flex-grow px-5"><h4 class="font-bold text-lg">Connect Wallet</h4><p class="font-light">Connect your browser wallet</p></div>
                <div className="flex item-center">
                    <button><ArrowForwardIosIcon /></button>
                </div>

            </div>
            <div class="container flex flex-row p-7 m-1 border-third border-2 border-gray-200 cursor-pointer">
            <div class="w-fit contents"><img src={login3img} /></div>
            <div class="flex-grow px-5"><h4 class="font-bold text-lg">Coinbase Wallet</h4><p class="font-light">Connect your browser wallet</p></div>
                <div className="flex item-center">
                    <button><ArrowForwardIosIcon  /></button>
                </div>

            </div>
            <div class="w-full text-center">
            <p class="mx-auto text-sm pt-5">Don't have a wallet? <span class="text-pink-700"><a href="">Download here</a></span></p>
            </div>
            </div>
            <div class="text-center py-8">
            <p class="tex-sm mx-auto w-fit">By using this app you are accepting these <span class="text-pink-700 underline">terms</span></p>
            </div>
            </section>
            </div>
            {renderLoginConfirmation()}
        </>
    )
}