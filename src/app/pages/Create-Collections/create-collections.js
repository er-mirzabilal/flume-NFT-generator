import Header from "../Components/Header/Header";
import Empty from "../../../assets/images/collections/empty.png";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { TextField, DialogContent, Dialog, DialogTitle } from "@mui/material";
import LayerToolBar from '../Components/Menu/Menu';
import { ArrowBackIos } from "@mui/icons-material";
import row1img from '../../../assets/images/collections/create/Layer1/image 25.png';
import row1img2 from '../../../assets/images/collections/create/Layer1/Mask group-1.png';
import deleteicon from '../../../assets/images/collections/create/Icon/delete.png';
import blankimg from '../../../assets/images/collections/create/Layer1/Group 87.png';
import {updateTitle,updateDimensionHeight, updateDimensionWidth, updateImagePreview, updateNoOfNft, addLayer,updateLayerName, moveLayer, deleteLayer, addLayerItem, updateLayerItem} from './store/createCollectionSlice'
import { useSelector, useDispatch } from 'react-redux'
import CloseIcon from '@mui/icons-material/Close';
import { useRef } from "react";
import AddIcon from '@mui/icons-material/Add';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import {useState} from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import InputAdornment from '@mui/material/InputAdornment';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CreateCollection = () => {
  const [expanded, setExpanded] = useState({});
  const [imageValidation, setImageValidation] = useState(null);
  const dispatch = useDispatch()
  const imageInputRef = useRef(null);  
  const {title, dimensionWidth, dimensionHeight, imagePreview, noOfNft, layers} = useSelector((state)=> state.createCollection);

  const renderNavigator = () => {
    return (
      <section class="bg-gray">
      <div class="max-w-screen-2xl lg:w-11/12 flex flex-row py-5 mx-auto">
        <a href="/view-collections">
          <button class="align-sub"> <ArrowBackIos className="text-third" /> </button>
        </a>
        <h2 class="text-2xl font-semibold text-third">
          <span class="px-3 text-primary">Create</span>
          NFT Collectons
        </h2>
        
      </div>
    </section>
    )
  }
  const renderCollection = () => {
    return (
      <section class="text-third">
      <div class="max-w-screen-2xl lg:w-11/12 flex flex-row mx-auto my-5">
      <div class="w-fit p-4 self-center">
      <div class="w-72 lg:w-60 md:w-52 sm:w-40 rounded-xl shadow-xl">
      <img src={imagePreview || Empty} class="w-full h-full" alt=""/>
      </div>
      <div class="flex flex-row justify-center py-5">
      <button class="bg-secondary p-2 rounded-lg mx-2 text-white">Randomize</button>
      <a href="" class="self-center p-1 border border-black rounded-full"> i </a>
      </div>
      </div>
      <div class="grow-1 p-4 align-baseline">
      <form class="w-72">
      <lable class="text-md block mb-2">NFT Collection Title:</lable>
      <TextField  id="demo-helper-text-misaligned-no-helper" fullWidth  size="small" value={title} onChange={(e) => dispatch(updateTitle(e.target.value))}/>
      <lable class="text-md block my-2">Image Format:</lable>
      <div class="flex flex-row">
      <TextField  id="demo-helper-text-misaligned-no-helper"  size="small" value={dimensionHeight}
        InputProps={{
          endAdornment: <InputAdornment position="end">H</InputAdornment>,
        }}
        type="number"
      onChange={(e) => dispatch(updateDimensionHeight(e.target.value))}/>
      <CloseIcon  class="self-center w-10"/>
      <TextField  id="demo-helper-text-misaligned-no-helper"  size="small" placeholder='L' value={dimensionWidth}
      
      InputProps={{
        endAdornment: <InputAdornment position="end">W</InputAdornment>,
      }}
        type="number" onChange={(e) => dispatch(updateDimensionWidth(e.target.value))}/>
      </div>
      
      <lable class="text-md block my-2">Enter the number of NFT to mint:</lable>
      <TextField  id="demo-helper-text-misaligned-no-helper" fullWidth size="small" value={noOfNft} onChange={(e) => dispatch(updateNoOfNft(e.target.value))} />
      <a href="/preview-images"><button class="block text-sm mt-2 mb-5 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded"> <AutorenewIcon />Generate Collections</button></a>
      <a href="/preview-images"><button class="block text-sm mt-2 mb-5 text-white bg-primary border-0 py-2 px-5 focus:outline-primary rounded">Generate Collections</button></a>
      </form>
      </div>
      </div>
      </section>
    )

  } 
  const renderLayerItem = (data, index, layerIndex) => {
    return (
      <div className="flex my-3">
      <div class="w-96 h-auto self-center relative m-2">
       <img class="w-full h-full" src={data.imageUrl} />
       <a href="" class="absolute bottom-0" ><img src={deleteicon} /></a>
      </div>
      <div class="w-96 m-2">
      <lable class="text-md block my-1">Image Name:</lable>
      <TextField  id="demo-helper-text-misaligned-no-helper"  onChange={(e) => dispatch(updateLayerItem({layerIndex, index, key:'name', value: e.target.value}))}/>
      <lable class="text-md block my-1">Rarity:</lable>
      {/* <TextField  id="demo-helper-text-misaligned-no-helper" onChange={(e) => dispatch(updateLayerItem({layerIndex, index, key:'rarity', value: e.target.value}))} /> */}
      <FormControl fullWidth>
        <Select
          id="demo-simple-select"
          value={data.rarity}
          onChange={(e) => dispatch(updateLayerItem({layerIndex, index, key:'rarity', value: e.target.value}))} 
        >
          <MenuItem value={1}>Rarity 1</MenuItem>
          <MenuItem value={2}>Rarity 2</MenuItem>
          <MenuItem value={3}>Rarity 3</MenuItem>
        </Select>
      </FormControl>
      
        </div>
        <hr className="my-5" />
      </div>
    );

  }
  const validateImage =  (image) => {
    return new Promise((resolve, reject) => {
      var reader = new FileReader();

      //Read the contents of Image File.
          reader.readAsDataURL(image);
          reader.onload = function (e) {
      
            //Initiate the JavaScript Image object.
            var image = new Image();
      
            //Set the Base64 string return from FileReader as source.
            image.src = e.target.result;
      
            //Validate the File Height and Width.
            const isValid = false;
            image.onload = function () {
              var height = this.height;
              var width = this.width;
              if (height == dimensionHeight && width == dimensionWidth) {
                resolve({height, width});
              }
              else {
                reject({height, width});
              }
            };
            
      };
    })

  }

  const renderImageValidationWarning = () => {  
    console.log('image validation', imageValidation);
    return (
            <Dialog onClose={()=>setImageValidation(null)} open={!!imageValidation}>
                <DialogTitle>
                    <IconButton
                        aria-label="close"
                        onClick={()=>setImageValidation(null)}
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
                    <div className="text-center p-16">
                       <h2> Image Dimestion Executed!</h2>
                        <p>Selected image is <span>{imageValidation?.h} <CloseIcon /> {imageValidation?.w} </span>
                         but collection is <span>{dimensionHeight} <CloseIcon /> {dimensionWidth} </span></p>
                    </div>
                </DialogContent>
            </Dialog>
    )
}
  const testFunction = () => {
    console.log('Testing');
  }

  const uploadImage =  (e,layerIndex, index) => {
    console.log('Uploading image', e.target.files);

    if(e.target.files){
      //validate image 
      validateImage(e.target.files[0])
      .then(()=> {
          dispatch(addLayerItem({index: layerIndex, imageUrl:  URL.createObjectURL(e.target.files[0])}))

      })
      .catch((res)=> {
        console.log(res, 'res');
        setImageValidation({h: res.height, w: res.width});
      })

    }
  }

  const renderNewItem = (layerIndex, index) => {
    return (
      <div className="flex my-3">
              <div class="w-96 h-auto self-center relative m-2">
              <img class="w-full h-full" src={blankimg} />
              <button class=" absolute -bottom-3 left-2/4 -translate-x-2/4 w-fit text-sm text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded" onClick={()=> {
                imageInputRef.current.click()}
                }><AddIcon/> Add Image</button>
              <input type="file" ref={imageInputRef} style={{display: 'none'}} onChange={(e)=> uploadImage(e, layerIndex ,index)}  />
              </div>
              <div class="w-full m-2 flex flex-col justify-between text-sm">
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
        <>
          <div class="flex no-wrap">
              <p className="self-center flex-none mx-1">Layer {data.index + 1}:</p>
              <TextField placeholder="Layer Name " fullWidth size="small"  sx={{backgroundColor: '#f0f0f0'}} value={data.name} onChange={(e) => dispatch(updateLayerName({name: e.target.value, index: data?.index}))} />
              <LayerToolBar className="self-center flex-none mx-1" onChange={(event,index) => handleToolBarChange(event, index)} index={data?.index}/>
            </div>
            <hr className="my-5"/>
            </>
        )

  }
  const handleExpandClick = (layerIndex) => {
      setExpanded({
        ...expanded,
        [layerIndex]:  layerIndex in expanded ? !expanded[layerIndex] : false
      })
  };
  
  const renderLayer = (data, layerIndex) => {
    const layerItems = data?.items;
    const layerHeaderData = { name : data?.name, index: layerIndex };
    const shouldExpand = layerIndex in expanded ? expanded[layerIndex]: true;
      return (
        <div class="w-96 m-2 p-3 rounded-xl shadow-xl">
          {renderLayerHeader(layerHeaderData)}
          <div>
            Collapse
            <ExpandMore
            expand={shouldExpand}
            onClick={() => handleExpandClick(layerIndex)}
            aria-expanded={shouldExpand}
            aria-label="show more"
          >
             <ExpandMoreIcon />
          </ExpandMore>
          </div>
          <Collapse in={shouldExpand} timeout="auto" unmountOnExit>
          {layerItems && layerItems.length?  layerItems.map((item, layerItemIndex) => renderLayerItem(item, layerItemIndex, layerIndex) ): null }
          {renderNewItem(layerIndex, layerItems?.length || 0)}
          </Collapse>
  
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
      <section>
      <div class="max-w-screen-2xl lg:w-11/12 flex flex-wrap mx-auto my-5">
      {renderLayers()}
      <div class="w-1/3  m-2 p-3">
      <button class="bg-cyan-500 text-lg py-2 px-5 rounded-lg mx-2 text-white"  onClick={()=> dispatch(addLayer())} > <AddIcon /> Add new Layer</button>

      </div>
      
      </div>
      </section>
      {renderImageValidationWarning()}
    </div>
  );
};

export default CreateCollection;