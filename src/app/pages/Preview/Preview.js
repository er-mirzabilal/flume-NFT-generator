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
import { getCollection, getGeneratedCollection, postGenerateCollection } from '../../api/core';
import { collectionStatus } from '../../utils/constants';
import Header from '../Components/Header/Header';
import { fetchCollection, generateCollection, getTransformedCollection, reset } from '../Create-Collections/store/createCollectionSlice';
import { updateStateAttr } from '../store/authSlice';
import { showMessage } from '../store/messageSlice';

const filterSize = 5;
const Preview = () => {
   const {isImageGenerated} = useSelector((state)=> state.auth);
   const dispatch = useDispatch()
   const [open, setOpen] = useState(false);
   const navigate = useNavigate();
   const [images, setImages] = useState([]);
   const [collection, setCollection] = useState(null);
   const [loading, setLoading] = useState(true)
   const [moreLoading, setMoreLoading] = useState(false);
   const params = useParams();
   const [filterParams, setFilterParams] = useState({
      item_no__gte: 1,
      item_no__lte: filterSize
   })
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
      console.log('useEffect')
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
       postGenerateCollection({...collection, generate: true}).then(() => {
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
         <section class="w-4/5 mx-auto">
            <div className="tex-center my-16"> No image(s) available </div>
         </section>
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
            <Button onClick={()=> navigate('/test')}> Test</Button>
            <Button startIcon={<EditIcon sx={{color: 'white'}} /> } color="secondary" variant="contained" sx={{marginRight: 2}}><p style={{color: "white"}}
               onClick={()=> setOpen(true)}
            >Back to Edit</p></Button>
            <Button startIcon={<AutorenewIcon sx={{color: 'white'}}/>} color="secondary" variant="contained"
              sx={{marginRight: 2}}> <p style={{color: "white"}}
              onClick={()=> generateImage()}
              >
                  Regenerate Images </p>
            </Button>
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