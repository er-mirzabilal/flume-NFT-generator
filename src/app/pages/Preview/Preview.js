import AutorenewIcon from '@mui/icons-material/Autorenew';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EditIcon from '@mui/icons-material/Edit';
import { Button, CircularProgress, TextField } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getCollection, getGeneratedCollection, postDeployCollection, postGenerateCollection } from '../../api/core';
import { collectionStatus,contractAddress } from '../../utils/constants';
import Header from '../Components/Header/Header';
import { fetchCollection, generateCollection, getTransformedCollection, reset } from '../Create-Collections/store/createCollectionSlice';
import { updateStateAttr } from '../store/authSlice';
import { showMessage } from '../store/messageSlice';
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {useWeb3React} from '@web3-react/core'
import {ethers} from 'ethers';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
const abi = require('../../../assets/blockchain/factory_abi.json');



const filterSize = 5;
const Preview = () => {
   const {isImageGenerated} = useSelector((state)=> state.auth);
   const dispatch = useDispatch()
   const [open, setOpen] = useState(false);
   const navigate = useHistory();
   const [images, setImages] = useState([]);
   const [collection, setCollection] = useState(null);
   const [loading, setLoading] = useState(true)
   const [deploying, setDeploying] = useState(false);
   const [moreLoading, setMoreLoading] = useState(false);
   const params = useParams();
   const history = useHistory();
   const [openBlockChainModal, setOpenBlockChainModal] = useState(false);
   const [fee, setFee] = useState(0.1);
   const [symbol, setSymbol] = useState('');
   const [chain, setChain] = useState(1);
   const [filterParams, setFilterParams] = useState({
      item_no__gte: 1,
      item_no__lte: filterSize
   })
   const [imageProperty, setImageProperty] = useState(null);
  const {library, account} = useWeb3React();

    const handleClose = () => {
      setOpen(false);
    };

    const initialize = async () => {
      setLoading(true);
      getCollection(params?.id).then((collectionData) =>{
         setCollection(collectionData);
         const status = collectionData?.project?.status;
          if(status!== collectionStatus.GENERATING && status!== collectionStatus.PENDING){
               getGeneratedCollection(params.id,filterParams).then(data => {
                  setImages([...images, ...data]);
                  setLoading(false);
               })
            } 
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
        if(isImageGenerated?.status === 'success'){
         getGeneratedCollection(params.id,filterParams).then(data => {
            setImages([...images, ...data]);
            setLoading(false);
         })
        }
      }
    },[isImageGenerated])
   
    const generateImage = async() => {
       dispatch(updateStateAttr({attr: 'isImageGenerated', data: null}));
       setLoading(true);
       postGenerateCollection({...collection, generate: true, edit: false}).then(() => {
         initialize();
       })
       .catch(() => {
          showMessage({message: 'Error while generating image!', soverity: 'error'});
       })
    }
    const loadMore = ()=> {
       setMoreLoading(true);
      const updatedFilterParms = {...filterParams,
          item_no__gte: (filterParams.item_no__gte + filterSize),
         item_no__lte: (filterParams.item_no__lte + filterSize)
         }
         getGeneratedCollection(params.id,updatedFilterParms).then(data => {
            setImages([...images, ...data]);
            setFilterParams(updatedFilterParms);
            setMoreLoading(false)
         })
    }
    const getAmountInWei = (originalAmount, decimals = 18) => {
      return ethers.utils.parseUnits(originalAmount, decimals);
  }
    const doTransection = async () => {
      const contract = new ethers.Contract(contractAddress[4], abi, library.getSigner() );
      console.log(collection.project.project_hash);
     
      const deploymentFee = await contract.fee();
      console.log('deploymentFee', deploymentFee);
      const options = {
         "value": deploymentFee.toString()

      }
      // console.log('fee', fee);
      const mintingFee =   getAmountInWei(fee.toString(), 18);
      console.log('contract', contract, mintingFee);
      console.log(
         collection.project.edition,
         symbol, // symbol
         collection.project.ipfs_url_metadata, //baseurl
         mintingFee, // fee
         collection.project.count, //count
         false,
         true,
          account, //account
          collection.project.count, //limit = count
         1000, // royality
         "",
         collection.project.project_hash, //project has
         options
      )
   
      contract.createFlumeContract(
        collection?.project?.edition,
        symbol, // symbol
        collection?.project?.ipfs_url_metadata, //baseurl
        mintingFee, // fee
        collection?.project?.count, //count
        false,
        true,
         account, //account
         collection?.project?.count, //limit = count
        1000, // royality
        "",
        collection?.project?.project_hash, //project has
        options
      ).then(res => {
         res.wait()
         .then( async (transectionResponse) => {
            console.log(transectionResponse, 'transection response');
            console.log( await contract.deployedCollections(collection.project.project_hash));

            // showMessage({message: "Transection successfully processed!", soverity:"success"})
         })
         .catch(err => {
            console.log(err,  'final transection resp');
         });
       
         //  console.log(res, 'Transection successfully procced');
      }).catch(err => {
        console.log(err, 'Something went wrong while trasection');
        showMessage({message: "Something went wrong while trasection !", soverity:"error"})
  
      })
    }
  
    const deployCollection = () => {
       if(params.id){
          const data = {
             project: params.id
          }
         setDeploying(true);
         doTransection();
         // postDeployCollection(data)
         //  .then((response)=> {
         //     console.log('deploy Collection request is generated', response.data);
         //     history.push(`/live-collection/${params.id}`);
         //     return;
         //  })
         //  .catch((error) => {
         //     console.log('Something went wrong while Deploying!');
         //     dispatch(showMessage({message: 'Something went wrong while deploying !', soverity: 'error'}))
         //  })
         //  .finally(() => setDeploying(false))
       }
    }
   const renderArt = (data) => { 
      return(
      <div class="flex-initial m-2 rounded-xl p-4 shadow-xl cursor-pointer hover:shadow-2xl" onClick={() => (setImageProperty(data.trait_info))}>
         <div class="block w-64	h-64">
         <img src={data.image_url} className="w-full h-full" alt="item"/>
         </div>
         <div class="flex flex-row pt-2 justify-between">
         <h3>#{data.item_no}</h3>
         </div>
      </div>
      )
   }
   const renderCollection = () => {
      if(images && images.length) {
         return (
            <section class="w-4/5 mx-auto mb-8">
               <div class="flex flex-wrap justify-center">
                     { images.map(item =>  renderArt(item))}
               </div>
               {images.length < collection?.project?.count  ? 
               ( <div className="text-center my-8"><Button color="primary" variant="contained" onClick={()=> loadMore()} disabled={moreLoading}>
                  { moreLoading && <CircularProgress size="1.4rem" />} Load More </Button> </div>
                  ): ''}
         </section>
         )
      }
      return (
         <section class="mx-auto text-center my-16">
            No image(s) available
         </section>
      )
   }
   const renderBlockChainModal = () => {
      return (
              <Dialog onClose={()=>setOpenBlockChainModal(false)} open={openBlockChainModal}>
                  <DialogTitle>
                      <IconButton
                          aria-label="close"
                          onClick={()=>setOpenBlockChainModal(false)}
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
                      <div className="p-4">
                        <h1 className="text-center font-bold">Add NFT's to Blockchain</h1>
                        <div className="mt-4">
                           <div className="my-2">
                              <lable class="text-sm block mb-2 my-4">NFT Collection Title:</lable>
                              <TextField   fullWidth  size="small"  disabled value={collection?.project?.edition} />
                              </div>
                         <div className="my-2">
                           <lable class="text-sm block mb-2">Minting Fee</lable>
                           <TextField type="number"  fullWidth  size="small"
                             value={fee}
                             onChange={(e)=> setFee(e.target.value)}
                             
                             />
                        </div>
                        <div className="my-2">
                           <lable class="text-sm block mb-2">Symbol</lable>
                           <TextField  fullWidth  size="small"
                             value={symbol }
                             onChange={(e)=> {
                                 console.log(e.target.value);
                                 setSymbol(e.target.value)}
                              }
                             
                             />
                        </div>
                        <div className="my-2">
                           <lable class="text-sm block mb-2">Change Network</lable>
                           <Select
                                 fullWidth
                                 size="small"
                                 id="demo-simple-select"
                                 value={chain}
                                 onchange={(e)=> setChain(e.target.value)}
                                 // onChange={(e) => dispatch(updateLayerItem({layerIndex, index, key:'rarity', value: e.target.value}))} 
                              >
                                 <MenuItem value={1}>Ethereum</MenuItem>
                                 <MenuItem value={137}>Polygon</MenuItem>
                           </Select>
                        </div>
                        <Button color="primary" variant="contained" onClick={() => deployCollection()} disabled={deploying} >Add Collection to Blockchain</Button>
                        </div>
                        
                      </div>
                  </DialogContent>
              </Dialog>
      )
  }
  const renderImagePropertyModal = () => {
  
   console.log(JSON.parse(imageProperty));
   const data =  imageProperty ? JSON.parse(imageProperty) : null;
   let rows = [];
   if(data){
      const propertyValue = Object.values(data);
      rows = Object.keys(data).map((key, index) => ({name: key, value: propertyValue[index]}));
   }
   console.log(rows);
   return (
      <Dialog onClose={()=>setImageProperty(null)} open={imageProperty}>
          <DialogTitle>
              <IconButton
                  aria-label="close"
                  onClick={()=>setImageProperty(null)}
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
              <div className="p-4">
                <h1 className="text-center font-bold">Properties</h1>
                <TableContainer >
                  <Table sx={{ minWidth: 300 }} aria-label="simple table">
                  <TableBody>
                     { rows && rows.length ? rows.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                           {row.name}
                        </TableCell>
                        <TableCell align="right">{row.value}</TableCell>
                        </TableRow>
                     )):
                      (<div className="text-center"> <p> No property available</p> </div>)}
                  </TableBody>
                  </Table>
               </TableContainer>
                
              </div>
          </DialogContent>
      </Dialog>
)
  }
   
    return (
    <div>
        <Header />
      <section class="bg-gray-200">
        <div class="w-4/5 flex flex-row py-5 mx-auto">
          <h2 class="text-2xl font-semibold">
            <span class="text-purple-800 px-3">Preview</span>
            Images
          </h2>
          
        </div>
      </section>
   {loading ? (
         <div className="text-center my-24">
         <CircularProgress />
         <p>Fetching collection....</p>
      </div>
   ): (
      <>
         <section class="w-4/5 mx-auto my-4">
            <Button sx={{color: 'white', fontWeight: 600,marginRight: 2}} startIcon={<EditIcon sx={{color: 'white'}} /> }
             color="secondary" variant="contained"
             onClick={()=> setOpen(true)}
             >
            Back to Edit</Button>
            <Button startIcon={<AutorenewIcon/>} color="secondary" variant="contained"
             sx={{color: 'white', fontWeight: 600,marginRight: 2}}
             onClick={()=> generateImage()}
              > 
            Regenerate Images 
            </Button>
            <Button startIcon={<CheckCircleIcon />} color="primary" variant="contained" sx={{marginRight: 2}}
               onClick={()=>setOpenBlockChainModal(true)}
            >
               <p>  Add Collection to Blockchain </p>
            </Button>
         </section>
         {renderCollection()}
      </>
   )}
     
     <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Edit Collection
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Are you sure you want to edit the collection?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cacnel</Button>
          <Button onClick={()=> navigate.push(`/create-collections/${params.id}`)} autoFocus>
            Edit
          </Button>
        </DialogActions>
      </Dialog>
      {renderBlockChainModal()}
      {renderImagePropertyModal()}
        </div>
        );
};

export default Preview;