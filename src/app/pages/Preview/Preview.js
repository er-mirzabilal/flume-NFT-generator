import {useState, useEffect} from 'react';
import Header from '../Components/Header/Header';
import view1 from '../../../assets/images/collections/view/NFT/view1.png';
import { useParams } from 'react-router-dom';
import { getGeneratedCollection } from '../../api/core';
import { CircularProgress, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
const Preview = () => {
   const navigate = useNavigate();
   const [collection, setCollection] = useState([]);
   const [loading, setLoading] = useState(true)
   const params = useParams();
   useEffect(() => {
      if(params?.id){
         setLoading(true);
         getGeneratedCollection(params.id).then(data => {
            setCollection(data);
            setLoading(false);
         });
      }
   },[]);
   const renderArt = (data) => { 
      return(
      <div class="flex-initial m-2 rounded-xl p-4 shadow-xl">
         <div class="block">
         <img src={data.image_url} />
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
         <div class="flex flex-wrap">
         {collection.map(item =>  renderArt(item))}
         </div>
         </section>
      )
   }

   console.log('preview', collection, loading);
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
      </div>
   ): (
      <>
         <section class="w-4/5 mx-auto">
            <Button color="secondary" variant="contained" sx={{marginRight: 2}}><p style={{color: "white"}}
               onClick={()=> navigate(`/create-collections/${params.id}`)}
            ><EditIcon /> Back to Edit</p></Button>
            <Button color="secondary" variant="contained"  sx={{marginRight: 2}}> <p style={{color: "white"}}> Regenerate Images </p></Button>
            <Button color="primary" variant="contained" sx={{marginRight: 2}} ><p style={{color: "white"}}>  Add Collection to Blockchain </p></Button>
         </section>
         {renderCollection()}
      </>
   )}
     

        </div>);
};

export default Preview;