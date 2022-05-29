import { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import { FormControl, TextField } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Button } from "@mui/material";
import { ArrowRight } from "@mui/icons-material";
import ViewCollection1img from "../../../assets/images/live/Etherscan.png";
import ViewCollection2img from "../../../assets/images/live/Opensea.png";
import { useParams } from 'react-router-dom';
import { getCollection, getGeneratedCollection } from "../../api/core";
import { updateStateAttr } from "../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { collectionStatus, contractAddress } from "../../utils/constants";
import { CircularProgress } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import {useWeb3React} from '@web3-react/core'
import {ethers} from 'ethers';
import { showMessage } from "../store/messageSlice";
const abi = require('../../../assets/blockchain/factory_abi.json');

const LiveCollection = () => {
  const {library, account} = useWeb3React();

  const {isImageGenerated} = useSelector((state)=> state.auth);
  const params = useParams();
  const [loading, setLoading] = useState(true)
  const [collection, setCollection] = useState(null);
  const [transectionFilled, setTransectionFilled] = useState(false);
  const dispatch = useDispatch();
  const initialize = async () => {
    getCollection(params?.id).then((collectionData) =>{
      console.log('colllection', collectionData);
       setCollection(collectionData);
        setLoading(false);
     
    }).catch(err => {
       console.error(err);
    })
 }

 useEffect(() => {
    if(params?.id){
       initialize();
       return () => dispatch(updateStateAttr({attr: "isImageGenerated", data: null}))
    }    
 },[]);

useEffect(() => {
      if(isImageGenerated){
           getCollection(params?.id).then((collectionData) =>{
             setCollection(collectionData);
           })
      }
    },[isImageGenerated])

  const doTransection = ()=> {
    console.log('trans', library)
    const contract = new ethers.Contract(contractAddress[4], abi, library.getSigner() );
    console.log('contract', contract);
    contract.createFlumeContract(
      collection?.project?.edition,
      'BTC', // symbol
      collection?.project?.ipfs_url_metadata, //baseurl
      account, //account
      100000000000, // fee
      1, //count
      false,
      true,
       account, //account
      1, //limit = count
      1000, // royality
      ""
    ).then(res => {
      showMessage({message: "Transection successfully processed!", soverity:"success"})
        console.log(res, 'Transection successfully submitted');
        setTransectionFilled(true);
    }).catch(err => {
      console.log(err, 'Something went wrong while trasection');
      showMessage({message: "Something went wrong while trasection !", soverity:"error"})

    })
  }
  const renderContent = () => {
    console.log(loading, collection, 'live');
    if(loading) {
      return(
        <section>
        <div class="max-w-screen-2xl w-11/12 mx-auto mb-16">
          <div class="p-10 shadow-lg rounded-lg text-center">
          <CircularProgress />
          <p class="m-2">Fetching Collection status</p>
          </div>
        </div>
      </section>
      )
    }
    if( transectionFilled)
    return (
      <>
      <section>
      <div class="max-w-screen-2xl w-11/12 mx-auto">
        <h2 class="text-2xl font-medium my-8">Embed in Your Website</h2>
        <div class="flex lg:flex-row flex-col p-10 shadow-lg rounded-lg">
          <div class="flex flex-col justify-between min-w-fit md:mr-5">
            <form class="">
              <lable class="text-md block mb-2">Mintable NFT Limit</lable>
              <TextField
                id="demo-helper-text-misaligned-no-helper"
                fullWidth
                size="small"
                value="2000"
              />
              <lable class="text-md block my-2">Cost for Minting</lable>
              <TextField
                id="demo-helper-text-misaligned-no-helper"
                size="small"
                value="2000"
              />
              <p class="inline-flex p-2">Matic</p>
            </form>
            <div>
              <button class="bg-secondary text-white font-semibold text-lg py-2 px-5 my-4 rounded-lg">
                Copy
              </button>
            </div>
          </div>
          <div class="md:ml-5">
            <h4>Snippet</h4>
            <div class="bg-gray p-10 break-words">
              <p>
                // Line height: 44 pt // (identical to box height)
                view.attributedText = NSMutableAttributedString(string: "Limit
                Min Table NFT", attributes:
                [NSAttributedString.Key.paragraphStyle: paragraphStyle]) var
                parent = self.view!
                view.heightAnchor.constraint(equalToConstant: 45).isActive =
                true view.leadingAnchor.constraint(equalTo:
                parent.leadingAnchor, constant: 260).isActive = true
                view.topAnchor.constraint(equalTo: parent.topAnchor, constant:
                500).isActive = true
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="max-w-screen-2xl w-11/12 mx-auto">
        <h2 class="text-2xl font-medium my-8">External Links</h2>
        <div class="flex md:flex-row flex-col p-10 shadow-lg rounded-lg justify-between">
          <div class="flex justify-between flex-grow">
            <button
              size="small"
              class="p-2 m-2 flex-grow flex border-1 rounded-lg border-gray bg-gray justify-evenly items-center"
            >
              <img src={ViewCollection1img} class="px-2"></img>{" "}
              <span class="px-2">View on Etherscan</span> <ArrowRight />
            </button>
            <button
              size="small"
              class="p-2 m-2 flex-grow flex border-1 rounded-lg border-gray bg-gray justify-evenly items-center"
            >
              <img src={ViewCollection2img} class="px-2"></img>{" "}
              <span class="px-2">View on Opensea</span> <ArrowRight />
            </button>
          </div>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value="10"
            size="small"
            className="m-2 md:w-1/2 min-w-fit grow-1"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </div>
      </div>
    </section>
    <section>
      <div class="max-w-screen-2xl w-11/12 mx-auto mb-16">
        <h2 class="text-2xl font-medium my-8">Files syncing with IPFS</h2>
        <div class="p-10 shadow-lg rounded-lg">
        <p class="m-2 text-lg">Please wait until this is done before sharing your collections</p>
        <hr class="mx-2 my-4 border-2 bg-primary text-primary"></hr>
        </div>
      </div>
    </section>
    </>
    )

   if(collection?.project?.status === collectionStatus.PINNING) {
     return (
      <section>
      <div class="max-w-screen-2xl w-11/12 mx-auto mb-16">
        <h2 class="text-2xl font-medium my-8">Files syncing with IPFS</h2>
        <div class="p-10 shadow-lg rounded-lg">
        <p class="m-2 text-lg">Please wait until this is done before sharing your collections</p>
        <LinearProgress />
        </div>
      </div>
    </section>
     )
   }
   if(collection?.project?.status === collectionStatus.FINALIZED){
    return(
     <section>
     <div class="max-w-screen-2xl w-11/12 mx-auto mb-16 p-10 shadow-lg rounded-lg">
       <div className="text-center">
         <h2 class="text-xl font-medium my-8">Files are Synchronized, Please make transection</h2>
         <Button color="primary" variant="contained" onClick={()=> doTransection()}>
           Transaction
         </Button>
       </div>
     </div>
   </section>
    )
  }

  }
  return (
    <div>
      <Header />
      <section class="bg-gray bg-liveCollection1 bg-contain bg-right bg-no-repeat bg-gray-200">
        <div class="max-w-screen-2xl w-11/12 mx-auto flex">
          <div class="my-5 sm:my-10 pr-0 sm:pr-6 text-left self-center">
            <h1 class="text-third xl:text-6xl lg:text-5xl md:text-4xl text-3xl mb-3">
              {loading ? (
                    <p> Collection is <span class="text-secondary">Uploading</span> </p>
              ): (
                <>
                <p> Collection is <span class="text-secondary">Live</span> </p>
                 <p class="text-third sm:text-2xl text-xl mb-3">
              Transaction Confirmed
            </p>
                </>

              )}
            </h1>
          </div>
        </div>
      </section>
     {renderContent()}
    </div>
  );
};

export default LiveCollection;
