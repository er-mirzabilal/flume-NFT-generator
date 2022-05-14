import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';



export const initializeSocket = createAsyncThunk('/auth/setSocket', async (data, {dispatch, getState}) => {
    console.log('initializeCollectionSocket call');
    const state = getState().auth;
    const socketState = state.isSocketInit;
    if(!socketState) {
        const notifyToken = localStorage.getItem('flume_notify_token');
        const socketUrl = `ws://127.0.0.1:8000/ws/notify/${notifyToken}/`;
        const socket = new WebSocket(socketUrl);
        console.log('socket', socket);
        dispatch(updateState({...state, isSocketInit: true}));
        socket.onmessage = (event) => {
            console.log(event, 'onmessage');
            const data = event?.data ?  JSON.parse(event.data) : null;
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