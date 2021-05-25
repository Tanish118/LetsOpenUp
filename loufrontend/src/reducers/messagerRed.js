
import{createSlice} from '@reduxjs/toolkit'

export const messagerRed=createSlice({
    name:"app",
    initialState:{
        channelId:null,
        channelName:null,        
    },
    reducers:{
        setChannelId:(state,action)=>{
            state.app+=action.payload;
        }
    }
})
export const {setChannelId}=messagerRed;
export const selectChannelId=(state)=>state.app.channelId;
export const selectChannelName=(state)=>state.app.channelName;
export default messagerRed.reducer;