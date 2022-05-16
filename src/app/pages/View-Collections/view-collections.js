import AddIcon from '@mui/icons-material/Add';
import { Button, CircularProgress, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import noPreviewImage from '../../../assets/images/collections/no-preview2.jpeg';
import viewCollection1img from '../../../assets/images/collections/view/view-collection1-img.png';
import { createCollection, getColections } from '../../api/core';
import { collectionStatus } from '../../utils/constants';
import Header from '../Components/Header/Header';
import ImagePreview from '../Create-Collections/ImagePreview';
const ViewCollection = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [collections, setCollections] = useState([]);
    const [creating, setCreating] = useState(false);

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
        const edition = 'Untitled_' + Math.floor((Math.random() * 100) + 1);
        createCollection({edition, count: 0 })
        .then(response => {
            const id = response?.data?.id;
            if(id) navigate(`/create-collections/${id}`)
        })
        .catch(error => {
            console.error(error)
        })
        
    }
    const openCollection = (data) => {
        switch(data.status) {
            case collectionStatus.PENDING :
                navigate(`/create-collections/${data.id}`);
                break;
            case collectionStatus.GENERATING :
                navigate(`/preview-images/${data.id}`);
                break;
            case collectionStatus.GENERATED :
                navigate(`/preview-images/${data.id}`);
                break;
            default :
                navigate(`/create-collections/${data.id}`);
        }
      
    }
    const renderCollection = (collection) => {
        // console.log('col',collection.display_image, collection);
        return (
            <div class="w-80 rounded-xl m-2 p-4 shadow-lg cursor-pointer hover:shadow-2xl" onClick={() => openCollection(collection)}>
                <div class="block">
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
                <div className="text-center my-16 ">
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
            <div className="text-center py-16">
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
             <p  className="text-white font-semibold " >Create NFT Collection </p>
             </Button>
         </div>
         </section>
            {renderCollections()}
        </div>
    );
}

export default ViewCollection;