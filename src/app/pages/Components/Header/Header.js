import Logo from "../../../../assets/images/Logo.png";
import Vector from "../../../../assets/images/Vector.svg";
import {useHistory} from "react-router-dom";
import {useState} from "react";
import CustomizedDialogs from "../Model/CustomizedDialogs";
import Typography from "@mui/material/Typography";
import { useWeb3React } from "@web3-react/core";
import { removeAuthLocalStorage } from "../../../api/core";
import { Button } from "@mui/material";
const Header = () => {
    const {active, deactivate, account} = useWeb3React()
    const navigate= useHistory();
    const [openWallet, setOpenWallet] = useState(false);

    const renderWalletContent = () => {
        return (
            <div className='m-16'>
            <Typography> Address</Typography>
             <Typography >  {account|| 'N/A'} </Typography>
            </div>
    )
    }
    const logoutAccount = async () => {
        removeAuthLocalStorage();
        deactivate();
        navigate.push('/');
    };
    return (
        <>
                <header class="sticky top-0 z-10 body-font shadow-lg bg-white">
                <div class="max-w-screen-2xl min-w-fit w-11/12  mx-auto flex flex-wrap py-3 items-center">
                  <a href="/" class="flex title-font font-medium items-center text-gray-900 md:mb-0">
                    <img className="w-28 sm:w-full sm:h-auto" src={Logo} />
                  </a>
                  <nav class="ml-auto flex flex-wrap items-center text-base justify-right">
                    <a class="mr-5 font-semibold text-base text-third hover:cursor-pointer" href="https://docs-flume.gitbook.io/flume/"  target="_blank" rel="noreferrer">Guide</a>
                    <a class="mr-5 font-semibold text-base text-third hover:cursor-pointer">
                      <img src={Vector} />
                    </a>
                  </nav>
                      {active ? (
                          <Button variant="contained" color="secondary"  onClick={()=> setOpenWallet(true)}><p className="font-semibold text-white " >My Wallet</p> </Button>
            
                      ):
                          (
                              <Button variant="contained" color="secondary"  onClick={() => navigate.push('/login')} >
                                <p className="font-semibold text-white ">  Connect Wallet </p>
                              </Button>
                          )
                      }

                </div>
              </header>
            {active && (
                <CustomizedDialogs open={openWallet} handleClose={()=> setOpenWallet(false)} title='My wallet' content={renderWalletContent()} primaryLabel= 'Logout' primaryAction={()=> logoutAccount()} />
            )}

        </>
    );
}

export default Header;