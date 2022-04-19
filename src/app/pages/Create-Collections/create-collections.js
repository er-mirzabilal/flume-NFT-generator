import Header from "../Components/Header/Header";
import Empty from "../../../assets/images/collections/empty.png";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { TextField } from "@mui/material";
import LayerToolBar from '../Components/Menu/Menu';
import { ArrowBackIos } from "@mui/icons-material";
import row1img from '../../../assets/images/collections/create/Layer1/image 25.png';
import row1img2 from '../../../assets/images/collections/create/Layer1/Mask group-1.png';
import deleteicon from '../../../assets/images/collections/create/Icon/delete.png';
import blankimg from '../../../assets/images/collections/create/Layer1/Group 87.png';
import {updateTitle,updateDimensionHeight, updateDimensionWidth, updateImagePreview, updateNoOfNft, addLayer,updateLayerName, moveLayer, deleteLayer, addLayerItem} from './store/createCollectionSlice'
import { useSelector, useDispatch } from 'react-redux'
import CloseIcon from '@mui/icons-material/Close';
import { useRef } from "react";

const CreateCollection = () => {
  const dispatch = useDispatch()
  const imageInputRef = useRef(null);  
  const {title, dimensionWidth, dimensionHeight, imagePreview, noOfNft, layers} = useSelector((state)=> state.createCollection);


  const renderNavigator = () => {
    return (
      <section class="bg-gray-200">
      <div class="w-4/5 flex flex-row py-5 mx-auto">
        <a href="/view-collections">
          <button class="align-sub"> <ArrowBackIos /> </button>
        </a>
        <h2 class="text-2xl font-semibold">
          <span class="text-purple-800 px-3">Create</span>
          NFT Collectons
        </h2>
        
      </div>
    </section>
    )
  }
  const renderCollection = () => {
    return (
      <section>
      <div class="w-4/5 flex flex-row mx-auto">
      <div class="w-fit p-2 self-center">
      <div class="w-full h-fit rounded-xl shadow-xl">
      <img src={imagePreview || Empty} class="w-full h-full" alt=""/>
      </div>
      <div class="flex flex-row justify-center py-5">
      <button class="bg-cyan-500 p-2 rounded-lg mx-2 text-white">Randomize</button>
      <a href="" class="self-center p-1 border border-black rounded-full"> i </a>
      </div>
      </div>
      <div class="w-full p-4">
      <form>
      <lable class="text-md block my-2">NFT Collection Title:</lable>
      <TextField  id="demo-helper-text-misaligned-no-helper" label="Collection Title" size="small" value={title} onChange={(e) => dispatch(updateTitle(e.target.value))}/>
      <lable class="text-md block my-2">Image Format:</lable>
      <TextField  id="demo-helper-text-misaligned-no-helper" label="Height"  size="small" value={dimensionHeight} type="number" onChange={(e) => dispatch(updateDimensionHeight(e.target.value))}/>
      <CloseIcon />
      <TextField  id="demo-helper-text-misaligned-no-helper" label="Width"  size="small" value={dimensionWidth} type="number" onChange={(e) => dispatch(updateDimensionWidth(e.target.value))}/>

      <lable class="text-md block my-2">Enter the number of NFT to mint:</lable>
      <TextField  id="demo-helper-text-misaligned-no-helper" label="2000" size="small" value={noOfNft} onChange={(e) => dispatch(updateNoOfNft(e.target.value))} />
      <a href="/preview-images"><button class="block text-sm mt-2 mb-5 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Generate Collections</button></a>
      </form>
      </div>
      </div>
      </section>
    )

  } 
  const renderLayerItem = (data, index) => {
    return (
      <div className="flex">
      <div class="w-full h-full self-center relative">
       <img src={data.imageUrl} />
       <a href="" class="absolute bottom-0" ><img src={deleteicon} /></a>
      </div>
      <div class="w-full">
      <lable class="text-md block my-1">Image Name:</lable>
      <TextField  id="demo-helper-text-misaligned-no-helper" label="Image Name"  />
      <lable class="text-md block my-1">Rarity:</lable>
      <TextField  id="demo-helper-text-misaligned-no-helper" label="Rarity" />
        </div>
        <hr className="my-5" />
      </div>
    );

  }
  const uploadImage = (e, index) => {
    if(e.target.files){
      dispatch(addLayerItem({index, imageUrl:  URL.createObjectURL(e.target.files[0]), imageSource: e.target.files[0] }))
    }
  }
  const renderNewItem = (index) => {
    return (
      <div className="flex mb-5">
              <div class="w-full h-full self-center relative">
              <img src={blankimg} />
              <button class="text-sm text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded" onClick={()=> imageInputRef.current.click()}>Add Image</button>
              <input type='file' id='file'  style={{display: 'none'}} ref={imageInputRef} onChange={(e)=> uploadImage(e, index)}/>
              </div>
              <div class="w-full flex flex-col justify-between text-sm">
              <p>Lorem jkj kddk  kldk dl k lkflfdk d dfkdfkd dk fdf dk dkfdk dkfkdfkd k fdk fdkfldkdk </p>
              <a href="">Need Help? <span class=" text-indigo-600 underline">Read our Guidelines</span></a>
              </div>
        </div>
    )
  }
  const handleToolBarChange = (action, index) => {
    if(action === 'delete'){
      dispatch(deleteLayer(index))

    }
    else if( action === 'left' || action === 'right' ){
      dispatch(moveLayer({index, moveAction: action}))
    }
  }
  const renderLayerHeader = (data) => {
    return(
          <div class="flex flex-row">
              <p className="self-center flex-none mx-1">Layer 1:</p>
              <TextField placeholder="Layer Name " size="small"  sx={{backgroundColor: '#f0f0f0'}} value={data.name} onChange={(e) => dispatch(updateLayerName({name: e.target.value, index: data?.index}))} />
              <LayerToolBar className="self-center flex-none mx-1" onChange={(event,index) => handleToolBarChange(event, index)} index={data?.index}/>
              <hr className="my-5"/>
            </div>
        )

  }
  const renderLayer = (data, layerIndex) => {
    const layerItems = data?.items;
    const layerHeaderData = { name : data?.name, index: layerIndex };
      return (
        <div class="w-1/3 m-2 p-3 rounded-xl shadow-xl">
          {renderLayerHeader(layerHeaderData)}
          {layerItems && layerItems.length?  layerItems.map((item, layerItemIndex) => renderLayerItem(item, layerItemIndex) ): null }
          {renderNewItem(layerIndex)}
  
        </div>
      )
  }
  const renderLayers = () => {
    if(layers && layers.length) {
      return layers.map((item, index) => renderLayer(item, index))

    }
    return (
      <div> No Layers Added yet</div>
    )
    
  }
  return (
    <div>
      <Header />
      {renderNavigator()}
      {renderCollection()}
      <section class="my-10">
      <div class="w-4/5 flex flex-wrap mx-auto">
      {renderLayers()}
      <div class="w-1/3  m-2 p-3">
      <button class="bg-cyan-500 text-lg p-2 rounded-lg mx-2 text-white"  onClick={()=> dispatch(addLayer())} >Add new Layer</button>

      </div>
      
      </div>
      </section>
    </div>
  );
};

export default CreateCollection;
