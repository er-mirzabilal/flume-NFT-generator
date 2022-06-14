import AddIcon from '@mui/icons-material/Add';
import { Button, CircularProgress, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import noPreviewImage from '../../../assets/images/collections/no-preview2.jpeg';
import viewCollection1img from '../../../assets/images/collections/view/view-collection1-img.png';
import { createCollection, getColections } from '../../api/core';
import { collectionStatus } from '../../utils/constants';
import Header from '../Components/Header/Header';
import ImagePreview from '../Create-Collections/ImagePreview';
import { useWeb3React } from '@web3-react/core';
import { showMessage } from '../store/messageSlice';
import { useDispatch } from 'react-redux';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

const ViewCollection = () => {
    const dispatch = useDispatch()
    const navigate = useHistory();
    const [loading, setLoading] = useState(true);
    const [collections, setCollections] = useState([]);
    const [creating, setCreating] = useState(false);
    const [open,setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
      };

    useEffect(() =>{
        getColections()
        .then((response) => {
            setCollections(response.data);
            setLoading(false);
        })
        .catch((error) => {
            console.error(error)
        })
    },[])
    const  createNewCollection  = () => {
        setCreating(true);
        const edition = '';
        createCollection({edition, count: 0 })
        .then(response => {
            const id = response?.data?.id;
            if(id) navigate.push(`/create-collections/${id}`)
        })
        .catch(error => {
            console.error(error);
            dispatch(showMessage({message: 'Something went wrong while creating collection !', severity: 'error'}));
        })
        .finally(() => setCreating(false));
        
    }
    const openCollection = (data) => {
        switch(data.status) {
            case collectionStatus.PENDING :
                navigate.push(`/create-collections/${data.id}`);
                break;
            case collectionStatus.GENERATING :
                navigate.push(`/preview-images/${data.id}`);
                break;
            case collectionStatus.GENERATED :
                navigate.push(`/preview-images/${data.id}`);
                break;
            case collectionStatus.FINILIZING:
                navigate.push(`/live-collection/${data.id}`);
                break
            case collectionStatus.FINALIZED :
                navigate.push(`/live-collection/${data.id}`);
                break
            default :
                navigate.push(`/create-collections/${data.id}`);
        }
      
    }
    const renderCollection = (collection) => {
        return (
            <div class="w-80 rounded-xl m-2 p-4 shadow-lg cursor-pointer hover:shadow-2xl relative" >
            <IconButton  sx={{position:'absolute', top:0, right:0}} color="error" onClick={()=> setOpen(true)} >
            <DeleteIcon />
          </IconButton>
          <div onClick={() => openCollection(collection)}>   
                 <ImagePreview images={collection.display_image} />
                 </div>
                    <div class="flex flex-row pt-2 justify-between">
                    <h3 class="text-third">{collection.edition}</h3><p class="bg-secondary rounded-md text-white px-2 text-sm self-center">{collection.status}</p>
                </div>
            </div>
        )
    }
    const renderCollections = () => {
        if(loading) {
            return (
                <div className="my-16 text-center ">
                    <CircularProgress />
                </div>
            )
        }
        if(collections && collections.length)
            return (
                <section>
                    <div class="max-w-screen-2xl w-11/12 mx-auto">
                        <div class="flex flex-wrap">
                        {collections.map(collection => renderCollection(collection)) }
                        </div>
                    </div>
                </section>
            )
        return (
            <div className="py-16 text-center">
               <p> You have no project yet, create one to get started. </p>
            </div>
        )
    }
    return (
        <div>
         <Header />
         <section class="bg-gray-100">
         <div class="max-w-screen-2xl w-11/12 mx-auto flex sm:flex-nowrap flex-wrap">
         <div class="mt-6 lg:mt-0 pr-0 sm:pr-6 text-left self-center">
         <h1 class="text-primary xl:text-6xl lg:text-5xl md:text-4xl text-3xl mb-3">Create or Monitor</h1>
         <h1 class="text-third xl:text-6xl lg:text-5xl md:text-4xl text-3xl mb-3">NFT Collections</h1>
         </div>
         <div class="my-5 mr-0 ml-auto shrink-0 text-right">
         <img class="-mb-20 w-96 h-auto md:w-full md:h-auto rounded" src={viewCollection1img} />
         </div>
         </div>
         </section>
         <section>
         <div class="max-w-screen-2xl w-11/12 mx-auto mt-8 mb-4">
             <Button color="primary" variant="contained"onClick={() => createNewCollection()} startIcon={creating? <CircularProgress size="1.4rem" color="secondary" /> : <AddIcon /> } disabled={creating}>
             <p  className="font-semibold text-white " >Create NFT Collection </p>
             </Button>
         </div>
         
         <Dialog
     open={open}
     onClose={handleClose}
     aria-labelledby="alert-dialog-title"
     aria-describedby="alert-dialog-description">
     <DialogTitle id="alert-dialog-title">
       Delete Collection
     </DialogTitle>
     <DialogContent>
       <DialogContentText id="alert-dialog-description">
       Are you sure you want to delete the collection?
       </DialogContentText>
     </DialogContent>
     <DialogActions>
       <Button onClick={handleClose}>Cancel</Button>
       <Button autoFocus>
         Delete
       </Button>
     </DialogActions>
   </Dialog>
         </section>
            {renderCollections()}
           
        </div>
    );
}

export default ViewCollection;