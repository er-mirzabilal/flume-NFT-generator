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
             <Typography >  {user?.attributes?.ethAddress || 'N/A'} </Typography>
            </div>
    )
    }
    return (
        <>
                <header class="sticky top-0 z-10 body-font shadow-lg bg-white">
                <div class="max-w-screen-2xl min-w-fit w-11/12  mx-auto flex flex-wrap py-5 items-center">
                  <a href="/" class="flex title-font font-medium items-center text-gray-900 md:mb-0">
                    <img src={Logo} />
                  </a>
                  <nav class="ml-auto flex flex-wrap items-center text-base justify-right">
                    <a class="mr-5 text-third hover:cursor-pointer" href="https://docs-flume.gitbook.io/flume/"  target="_blank">Guide</a>
                    <a class="mr-5 text-third hover:cursor-pointer">
                      <img src={Vector} />
                    </a>
                  </nav>
                      {isAuthenticated ? (
                          <button
                              className="inline-flex items-center px-3 py-1 text-base text-white border-0 rounded bg-secondary focus:outline-secondary"
                          onClick={()=> setOpenWallet(true)}>
                             My Wallet
                          </button>
                      ):
                          (
                              <button
                                  className="inline-flex items-center px-3 py-1 text-base text-white border-0 rounded bg-secondary focus:outline-secondary sm:mt-0"
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