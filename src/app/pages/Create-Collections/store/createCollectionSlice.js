import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import http from '../../../api/http';
import { showMessage } from '../../store/messageSlice';

export const getTransformedCollection = (data) => {
   const transformedCollection = {
    id: data.project.id,
    projectHash: data.project.project_hash,
    title: data.project.edition,
    dimensionHeight: data.project.dim1? parseInt(data.project.dim1) : 500,
    dimensionWidth: data.project.dim2 ? parseInt(data.project.dim2) : 500,
    noOfNft: data.project.count ? parseInt(data.project.count) : 10,
    status: data.project.status,
    displayImage: data?.project?.display_image,
    layers: data.layers.map((layer, index) => {
        return {
            name: layer.layer_name,
            order: layer.layer_order,
            items: layer.layer_items.map(item => ({
                imageUrl:  item.image_url,
                name: item.image_name,
                rarity: item.rarity 
            }))
        }
    })
   } 
   return transformedCollection;
}
export const prepareDataForPost = (data) => {
    const preparedData = {
        project : {
            id: data.id,
            project_hash: data.projectHash,
            edition: data.title,
            dim1: data.dimensionHeight,
            dim2: data.dimensionWidth,
            count: data.noOfNft,
            display_image: data.displayImage
        },
        layers: data.layers.map((layer, index) => {
            return {
                layer_name: layer.name,
                layer_order: index + 1,
                layer_items : layer.items.map(item => ({
                    image_url: item.imageUrl,
                    image_name: item.name,
                    rarity: item.rarity
                }))
            }
        })
    };
    return preparedData;
}
export const fetchCollection = createAsyncThunk('/collection/fetchCollection',  async (data, {dispatch})=> {
    // return [];
   await http.get(`/collection/${data}`)
    .then((response => {
        const transformedData = getTransformedCollection(response.data);
        dispatch(updateCollectionData(transformedData));
        if(transformedData.layers && !transformedData.layers.length) dispatch(addLayer());
        return response.data;
    }))
    .catch(err => {
        console.error(err);
    })
  

});
export const postCollection = createAsyncThunk('/collection/save', async (data, {getState ,dispatch}) => {
    const stateData = getState().createCollection;
    const formattedData = prepareDataForPost(stateData);
   await http.post(`/collection`,{...formattedData, generate: false})
    .then((response) => {
        dispatch(showMessage({message: 'Collection successfully saved !', soverity: 'success'}));
    })
    .catch((err) => {
        showMessage({message: 'Something went wrong while saving !', soverity: 'error'})
    })
});

export const generateCollection = createAsyncThunk('/collection/generate', async (data, {getState ,dispatch}) => {
    try{
        const stateData = getState().createCollection;
        const formattedData = prepareDataForPost(stateData);
        const data = await http.post(`/collection`,{...formattedData, generate: true, edit: true})
        return data.response;
    
    }
    catch(err) {
        showMessage({message: "Something went wrong while generating collection!", soverity: "error"});
        return false;
    }
 
});
export const uploadImageToServer = createAsyncThunk('/collection/uploadImage', async (data, {dispatch}) => {
    http.post(`/upload`,data.image)
    .then(response => {
        dispatch(addLayerItem({index: data.index, imageUrl:  response.data.url[0]}));
    })
    .catch(error => {
        console.error(error);
    })


});

const initialState = {
    id: null,
    projectHash: null,
    title: '',
    dimensionHeight: '',
    dimensionWidth: '', 
    noOfNft: '',
    layers: [],
    status: null,
    error: {},
    displayImage: null
}

export const counterSlice = createSlice({
  name: 'createCollection',
  initialState,
  reducers: {
    updateState: (state, action) =>{
        return {...action.payload};
    },
    updateStateAttr: (state, action) => {
        const {attr, data} = action.payload
        if(attr){
            state[attr] = data;
        }
    },
    updateError: (state, action) => {
        state.error = action.payload;
    },
    updateLoading: (state, action) => {
        state.loading = action.payload;
    },
    updateCollectionData: (state, action) => {
        return {...state, ...action.payload};
     
    },
    updateTitle: (state, action) => {
        state.title = action.payload;
    }, 
    updateDimensionHeight: (state, action) => {
        state.dimensionHeight = action.payload;
    }, 
    updateDimensionWidth: (state, action) => {
        state.dimensionWidth = action.payload;
    }, 
    updateImagePreview: (state, action) => {
        state.imagePreview = action.payload;
    },
    updateNoOfNft: (state, action) => {
        state.noOfNft = action.payload;
    },
    updateLayers: (state, action) => {
        state.layers = action.payload;
    },
    addLayer: (state) => {
        const newLayer = {
            name : "",
            items : []
        }
        state.layers = [...state.layers, newLayer];
    },
    deleteLayer: (state, action) => {
        if(state.layers && state.layers.length){
            state.layers = state.layers.filter((item, index) => index !== action.payload);
        }
    },
    updateLayerName: (state, action) => {
        const {name, index} = action.payload;
        if(state.layers[index]){
            const  layers = [...state.layers];
            let targetLayer = layers[index];
            if(targetLayer){
                targetLayer = {
                    ...targetLayer,
                    name
                }
                layers[index] = targetLayer;
                state.layers= layers;
            }

        }
    },
    moveLayer: (state, action) => {
        var layers = [...state.layers];
        const {index, moveAction} = action.payload;
        if(layers && layers.length){
            const targetLayer = layers[index];
            if(moveAction === 'left' && index > 0){
                const previousLayer = layers[index-1];
                layers.splice(index-1,2, targetLayer, previousLayer);
            }
            else if(moveAction === 'right' && index < layers.length - 1){
                const nextLayer = layers[index+1];
                layers.splice(index, 2, nextLayer, targetLayer);

            }
            state.layers = layers;
        }
    },
    addLayerItem: (state, action) => {
        var layers = [...state.layers];
        const {index, imageUrl} = action.payload;
        if(layers[index]){
                 var targetLayer = layers[index];
                targetLayer = {
                    ...targetLayer,
                    items: [
                        ...targetLayer.items,
                        {
                            name: '',
                            rarity: 1,
                            imageUrl,
                        }
                    ]
                }
                layers[index] = targetLayer;
                state.layers = layers;
            }
    },

    updateLayerItem: (state, action) => {
        var layers = [...state.layers];
        const {layerIndex, index, key, value} = action.payload;
        if(layers[layerIndex]){
                 let targetLayer = layers[layerIndex];
                 const targetLayerItem = targetLayer.items;
                 targetLayerItem[index] = {
                    ...targetLayerItem[index],
                    [key]: value
                 }
                targetLayer = {
                    ...targetLayer,
                    items:  targetLayerItem
                }
                layers[layerIndex] = targetLayer;
                state.layers = layers;
            }
    },
    reset: () => initialState
  },
})

// Action creators are generated for each case reducer function
export const {updateLoading, updateTitle,updateDimensionHeight, updateDimensionWidth, updateImagePreview,
    updateNoOfNft, updateLayers, addLayer, deleteLayer,updateLayerName, moveLayer,
     addLayerItem ,updateLayerItem, reset, updateCollectionData, updateError, updateStateAttr, updateState} = counterSlice.actions

export default counterSlice.reducer