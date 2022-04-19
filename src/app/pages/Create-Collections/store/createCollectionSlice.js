import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    title: '',
    dimensionHeight: 500,
    dimensionWidth: 500,
    noOfNft: 10,
    imagePreview: null,
    layers: []
}

export const counterSlice = createSlice({
  name: 'createCollection',
  initialState,
  reducers: {
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
        const {index, imageUrl, imageSourse} = action.payload;
        if(layers[index]){
                 var targetLayer = layers[index];
                targetLayer = {
                    ...targetLayer,
                    items: [
                        ...targetLayer.items,
                        {
                            imageName: '',
                            rarity: null,
                            imageUrl,
                            imageSourse
                        }
                    ]
                }
                layers[index] = targetLayer;
                state.layers = layers;
            }
    },
    reset: () => initialState
  },
})

// Action creators are generated for each case reducer function
export const { updateTitle,updateDimensionHeight, updateDimensionWidth, updateImagePreview,updateNoOfNft, updateLayers, addLayer, deleteLayer,updateLayerName, moveLayer, addLayerItem, reset } = counterSlice.actions

export default counterSlice.reducer