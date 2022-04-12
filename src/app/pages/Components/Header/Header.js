import Logo from "../../../../assets/images/Logo.png";
import Vector from "../../../../assets/images/Vector.svg";
import {useMoralis} from "react-moralis";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import CustomizedDialogs from "../Model/CustomizedDialogs";
import Typography from "@mui/material/Typography";
import {Logout} from "@mui/icons-material";

const Header = () => {
    const {isAuthenticated, user, logout} = useMoralis()
    const navigate = useNavigate();
    const [openWallet, setOpenWallet] = useState(false);

    const renderWalletContent = () => {
        return (
            <div className='m-16'>
            <Typography> Address</Typography>
             <Typography>  {user?.attributes?.ethAddress || 'N/A'} </Typography>
            </div>
    )
    }
    return (
        <>
                <header class="sticky top-0 z-10 text-gray-600 body-font shadow-lg md:px-5 bg-white">
                <div class="container mx-auto flex flex-wrap p-5 sm:flex-row items-center">
                  <a href="/" class="flex title-font font-medium items-center text-gray-900 md:mb-0">
                    <img src={Logo} />
                  </a>
                  <nav class="ml-auto flex flex-wrap items-center text-base justify-right">
                    <a class="mr-5 hover:text-gray-900 hover:cursor-pointer">Guide</a>
                    <a class="mr-5 hover:text-gray-900 hover:cursor-pointer">
                      <img src={Vector} />
                    </a>
                  </nav>
                      {isAuthenticated ? (
                          <button
                              className="inline-flex items-center text-white bg-cyan-500 border-0 py-1 px-3 focus:outline-none hover:bg-cyan-300 rounded text-base mt-4 sm:mt-0"
                          onClick={()=> setOpenWallet(true)}>
                             My Wallet
                          </button>
                      ):
                          (
                              <button
                                  className="inline-flex items-center text-white bg-cyan-500 border-0 py-1 px-3 focus:outline-none hover:bg-cyan-300 rounded text-base mt-4 sm:mt-0"
                              onClick={() => navigate('/login')}>
                                  Connect Wallet
                              </button>
                          )
                      }

                </div>
              </header>
            {isAuthenticated && (
                <CustomizedDialogs open={openWallet} handleClose={()=> setOpenWallet(false)} title='My wallet' content={renderWalletContent()} primaryLabel= 'Logout' primaryAction={()=> {
                    logout();
                    navigate('/');
                }} />
            )}

        </>
    );
}

export default Header;