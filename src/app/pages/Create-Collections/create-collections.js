
import { ArrowBackIos } from "@mui/icons-material";
import AddIcon from '@mui/icons-material/Add';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SaveIcon from '@mui/icons-material/Save';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import { Button, CircularProgress, Dialog, DialogContent, DialogTitle, TextField } from "@mui/material";
import MuiAlert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Snackbar from '@mui/material/Snackbar';
import { styled } from '@mui/material/styles';
import { forwardRef, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import blankimg from '../../../assets/images/collections/create/Layer1/Group 87.png';
import Empty from "../../../assets/images/collections/empty.png";
import Header from "../Components/Header/Header";
import LayerToolBar from '../Components/Menu/Menu';

import {
  addLayer, deleteLayer, fetchCollection, generateCollection, moveLayer, postCollection, reset, updateDimensionHeight,
  updateDimensionWidth, updateError, updateLayerItem, updateLayerName, updateNoOfNft, updateTitle, uploadImageToServer
} from './store/createCollectionSlice';
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


const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

// const notifyToken = localStorage.getItem('flume_notify_token');
// const socketUrl = `ws://127.0.0.1:8000/ws/notify/${notifyToken}/`;
const CreateCollection = () => {
  // const [socket, setSockets] = useState(new WebSocket(socketUrl))
  const navigate = useNavigate()
  const params = useParams();
  const [expanded, setExpanded] = useState({});
  const [imageValidation, setImageValidation] = useState(null);
  const dispatch = useDispatch()
  const [saving, setSaving] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [open, setOpen] = useState(false);
  const imageInputRef = useRef([]);  
  const {title, dimensionWidth, dimensionHeight, imagePreview,
     noOfNft, layers, loading, error} = useSelector((state)=> state.createCollection);

  useEffect(()=> {
    if(params?.id){
      dispatch(fetchCollection(params.id));
    }
    return () => dispatch(reset())
  },[dispatch, params?.id]);

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
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const validate = () => {
    return new Promise((resolve, reject) => {
      const err = {};
      if(!title) err.title = 'Title is required';
      if (!dimensionHeight) err.dimensionHeight = 'Height is required';
      else if(dimensionHeight && dimensionHeight > 1200) err.dimensionHeight = 'Height must <= 1200px';
      if (!dimensionWidth) err.dimensionWidth = 'Width is required';
      else if(dimensionWidth && dimensionWidth > 1200) err.dimensionWidth = 'Width must <= 1200px'; 
      if(noOfNft < 10 || noOfNft > 10000) err.noOfNft = 'Number of  NFT must > 10 and < 10000';
      
      if(Object.keys(err).length){
        updateError(err);
        reject(err)
      }
      resolve(true)
    })
  }
  const removeError =(key) => {
    const cloneError = {...error};
    delete cloneError[key];
    dispatch(updateError(cloneError));
  }
  const save = async () => {
    validate()
    .then(async() => {
      if(error && Object.keys(error).length) dispatch(updateError({}));
      setSaving(true);
      await dispatch(postCollection());
      setSaving(false);
      setOpen(true);
    })
    .catch(err => {
      dispatch(updateError(err));
    })
   
  }
  const generate = async () => {
    setGenerating(true);
    dispatch(generateCollection());
    navigate(`/preview-images/${params.id}`);
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
      <button class="bg-secondary p-2 rounded-lg mx-2 text-white"><ShuffleIcon /> Randomize</button>
      </div>
      </div>
      <div class="grow-1 p-4 align-baseline">
      <div class="w-72">
          <FormControl>
            <lable class="text-md block mb-2">NFT Collection Title:</lable>
            <TextField error={error && error.title}  id="demo-helper-text-misaligned-no-helper" fullWidth  size="small" value={title} onChange={(e) => {
              if(error && error.title) removeError('title');
              dispatch(updateTitle(e.target.value))}}/>
            {error && error.title ? <FormHelperText error> {error.title} </FormHelperText>: ''}
         </FormControl>
         
      <lable class="text-md block my-2">Image Format: {(error && (error.dimensionHeight || error.dimensionWidth))? (<span style={{color:'red', fontSize:'12px'}}> H,W must less than 1200px </span>): ''}</lable>
      <div class="flex flex-row">
        <FormControl>
          <TextField  id="demo-helper-text-misaligned-no-helper"  size="small" value={dimensionHeight}
          error={error && error.dimensionHeight} 
            InputProps={{
              endAdornment: <InputAdornment position="end">H</InputAdornment>,
            }}
            type="number"
          onChange={(e) => {
            if(error && error.dimensionHeight) removeError('dimensionHeight');
            dispatch(updateDimensionHeight(e.target.value))}}/>
       </FormControl>
      <CloseIcon  class="self-center w-10"/>
      <TextField error={error && error.dimensionWidth} id="demo-helper-text-misaligned-no-helper"  size="small" placeholder='L' value={dimensionWidth}
      
      InputProps={{
        endAdornment: <InputAdornment position="end">W</InputAdornment>,
      }}
        type="number" onChange={(e) => {
          if(error && error.dimensionWidth) removeError('dimensionWidth');
        
          dispatch(updateDimensionWidth(e.target.value))}}/>
      </div>
      <FormControl>
        <lable class="text-md block my-2">Enter the number of NFT to mint:</lable>
        <TextField error={error && error.noOfNft} id="demo-helper-text-misaligned-no-helper" fullWidth size="small" value={noOfNft} onChange={(e) => {
            if(error && error.noOfNft) removeError('noOfNft');
          dispatch(updateNoOfNft(e.target.value))}} />
        {error && error.noOfNft ? (<FormHelperText error> {error.noOfNft}</FormHelperText>): ''}
        </FormControl>
      <div className="flex justify-end mt-8" >
        <Button sx={{marginRight: 2}} startIcon={generating ? <CircularProgress size="1.4rem" /> : <AutorenewIcon />} disabled={generating} color="primary" variant="contained" onClick={()=> generate()}>Generate</Button>
        <Button startIcon={saving ? <CircularProgress size="1.4rem" /> : <SaveIcon />} variant="contained" disabled={saving} color="primary" onClick={()=> save()}>Save</Button>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right'}}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar>
      
       {/* <button class=" text-sm mt-2 mb-5 mx-5 text-white bg-primary border-0 py-2 px-5 focus:outline-primary rounded" onClick={()=> dispatch(generateCollection())} ><AutorenewIcon />Generate</button> */}
       {/* <button class="text-sm mt-2 mb-5 text-white bg-primary border-0 py-2 px-5 " onClick={()=> save()}><SaveIcon  /> Save</button> */}
       </div>
      </div>
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
       <IconButton className="absolute bottom-0" color="error">
         <DeleteIcon />
       </IconButton>
      </div>
      <div class="w-96 m-2">
      <lable class="text-md block my-1">Image Name:</lable>
      <TextField  id="demo-helper-text-misaligned-no-helper" size="small" value={data.name} onChange={(e) => dispatch(updateLayerItem({layerIndex, index, key:'name', value: e.target.value}))}/>
      <lable class="text-md block my-1">Rarity:</lable>
      {/* <TextField  id="demo-helper-text-misaligned-no-helper" onChange={(e) => dispatch(updateLayerItem({layerIndex, index, key:'rarity', value: e.target.value}))} /> */}
      <FormControl fullWidth>
        <Select
          size="small"
          id="demo-simple-select"
          value={data.rarity}
          onChange={(e) => dispatch(updateLayerItem({layerIndex, index, key:'rarity', value: e.target.value}))} 
        >
          <MenuItem value={1}>Super Rare</MenuItem>
          <MenuItem value={20}>Rare</MenuItem>
          <MenuItem value={40}>Uncommon</MenuItem>
          <MenuItem value={100}>Common</MenuItem>

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
                       <h2> Image Dimension Exceeded!</h2>
                        <p>Selected image is <span className="bg-gray	rounded-full">{imageValidation?.h} <CloseIcon /> {imageValidation?.w} </span>
                         but collection is <span className="bg-gray	rounded-full">{dimensionHeight} <CloseIcon /> {dimensionWidth} </span></p>
                    </div>
                </DialogContent>
            </Dialog>
    )
}
  const testFunction = () => {
  }

  const uploadImage =  (e,layerIndex, index) => {
    if(e.target.files){
      //validate image 
      const image =  e.target.files[0];
      validateImage(image)
      .then(()=> {
        const formData = new FormData();
        formData.append('image',image);
        const data = {
          image: formData,
          index: layerIndex,
        }
        dispatch(uploadImageToServer(data));

      })
      .catch((res)=> {
        setImageValidation({h: res.height, w: res.width});
      })
      .finally(() => {
        e.target.value = null;
      })

    }
  }

  const renderNewItem = (layerIndex, index) => {
    return (
      <div className="flex my-3">
              <div class="w-96 h-auto self-center relative m-2">
              <img class="w-full h-full" src={blankimg} />
              <button class=" absolute -bottom-3 left-2/4 -translate-x-2/4 w-fit text-sm text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded" onClick={()=> {
                imageInputRef.current[layerIndex].click()}
                }><AddIcon/> Add Image</button>
              <input type="file" ref={(el) => {imageInputRef.current[layerIndex]= el}} style={{display: 'none'}} onChange={(e)=> uploadImage(e, layerIndex ,index)}  />
              </div>
              <div class="w-full m-2 flex flex-col justify-between text-sm">
              <p>Upload multiple images for each layer. Give a name and a rarity level to each images. </p>
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
  }

  const renderCollectionData = () => {
    return (
      <>
        {renderCollection()}
        <section>
        <div class="max-w-screen-2xl lg:w-11/12 flex flex-wrap mx-auto my-5">
        {renderLayers()}
        <div class="w-1/3  m-2 p-3">
        <button class="bg-cyan-500 text-lg py-2 px-5 rounded-lg mx-2 text-white"  onClick={()=> dispatch(addLayer())} > <AddIcon /> Layer</button>

        </div>
        
        </div>
        </section>
        {renderImageValidationWarning()}
    </>
    )
  }
  const style = {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  
  return (
    
    <div>
      <Header />
      {renderNavigator()}
      {loading ?  (
        <div className="text-center my-24">
          <CircularProgress />
        </div>
      ): renderCollectionData()
      }
   
    </div>
  );
};

export default CreateCollection;