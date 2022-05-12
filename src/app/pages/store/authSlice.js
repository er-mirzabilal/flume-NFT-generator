import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const initializeSocket = createAsyncThunk('/auth/setSocket', async (data, {dispatch, getState}) => {
    const state = getState().auth;
    const socket = state.socket;
    if(!socket) {
        const notifyToken = localStorage.getItem('flume_notify_token');
        const socketUrl = `ws://127.0.0.1:8000/ws/notify/${notifyToken}/`;
        const socket = new WebSocket(socketUrl);
        dispatch(updateState({...state, socket}));
        socket.onmessage = (event) => {
            const data = event?.data ?  JSON.parse(event.data) : null;
            if(data)  dispatch(updateState({...state, isImageGenerated: data}))
        }
    }
 
});

const initialState = {
    socket: null,
    isImageGenerated: null
}
export const authSlice = createSlice({
    name: 'createCollection',
    initialState,
    reducers: {
        updateState(state, action) {
            return {...action.payload};
        }
    }
});

export const {updateState} = authSlice.actions;
export default authSlice.reducer;