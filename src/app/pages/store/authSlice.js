import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';



export const initializeSocket = createAsyncThunk('/auth/setSocket', async (data, {dispatch, getState}) => {

    const state = getState().auth;
    const socketState = state.isSocketInit;
    if(!socketState) {
        const notifyToken = localStorage.getItem('flume_notify_token');
        const socketUrl = `ws://'http://164.92.157.140:8000/api'/ws/notify/${notifyToken}/`;
        const socket = new WebSocket(socketUrl);
        dispatch(updateState({...state, isSocketInit: true}));
        socket.onmessage = (event) => {
            const data = event?.data ?  JSON.parse(event.data) : null;
            console.log('onMessage', data);
            if(data)  dispatch(updateState({...state, isImageGenerated: data}))
        }
    }
 
});

const initialState = {
    
    isSocketInit: null,
    isImageGenerated: null
}
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        updateState(state, action) {
            return {...action.payload};
        },
        updateStateAttr: (state, action) => {
            const {attr, data} = action.payload;
            if(state[attr]){
                state[attr] = data;
            }
        }
    }
});

export const {updateState, updateStateAttr} = authSlice.actions;
export default authSlice.reducer;