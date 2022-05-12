import AutorenewIcon from '@mui/icons-material/Autorenew';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EditIcon from '@mui/icons-material/Edit';
import { Button, CircularProgress } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getGeneratedCollection } from '../../api/core';
import { collectionStatus } from '../../utils/constants';
import Header from '../Components/Header/Header';
import { fetchCollection, reset } from '../Create-Collections/store/createCollectionSlice';

const Preview = () => {
   const {isImageGenerated} = useSelector((state)=> state.auth);
   const dispatch = useDispatch()
   const [open, setOpen] = useState(false);

   const navigate = useNavigate();
   const [collection, setCollection] = useState([]);
   const [loading, setLoading] = useState(true)
   const params = useParams();
  
    const handleClose = () => {
      setOpen(false);
    };

    const initialize = async () => {
      setLoading(true);
      const data = await dispatch(fetchCollection(params?.id));
      const collectionData = data?.payload;
      if(collectionData){
         if(collectionData?.project?.status === collectionStatus.GENERATING){
         } else if(collectionData?.project?.status === collectionStatus.GENERATED){
            getGeneratedCollection(params.id).then(data => {
               setCollection(data);
               setLoading(false);
            })
         }
      } 
      
   }

   useEffect(() => {
      if(params?.id){
         initialize();
         return () => dispatch(reset());
      }    
   },[]);
   
   useEffect(() => {
      if(isImageGenerated){
        if(isImageGenerated?.status === 'success'){
         getGeneratedCollection(params.id).then(data => {
            setCollection(data);
            setLoading(false);
         })
        }
      }
    },isImageGenerated)
   
   const renderArt = (data) => { 
      return(
      <div class="flex-initial m-2 rounded-xl p-4 shadow-xl">
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
      return (
         <section class="w-4/5 mx-auto">
         <div class="flex flex-wrap justify-center">
         {collection.map(item =>  renderArt(item))}
         </div>
         </section>
      )
   }
   
    return (<div>
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
            <Button startIcon={<EditIcon /> } color="secondary" variant="contained" sx={{marginRight: 2}}><p style={{color: "white"}}
               onClick={()=> setOpen(true)}
            >Back to Edit</p></Button>
            <Button startIcon={<AutorenewIcon />} color="secondary" variant="contained"  sx={{marginRight: 2}}> <p style={{color: "white"}}> Regenerate Images </p></Button>
            <Button startIcon={<CheckCircleIcon />} color="primary" variant="contained" sx={{marginRight: 2}} ><p style={{color: "white"}}>  Add Collection to Blockchain </p></Button>
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
          <Button onClick={()=> navigate(`/create-collections/${params.id}`)} autoFocus>
            Edit
          </Button>
        </DialogActions>
      </Dialog>
        </div>);
};

export default Preview;