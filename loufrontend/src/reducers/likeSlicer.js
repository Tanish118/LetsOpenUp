import {createSlice} from '@reduxjs/toolkit';
export const likeSlice=createSlice({
    name:"like",
    initialState:{
            likeId:null,
        },
    reducers:{
        setLike:(state,action)=>{
            state.likeId=action.payload.likeId;
        },
    },
});

export const{setLike}=likeSlice.actions;
export const selectLikeId=(state)=>state.like.likeId;
export default likeSlice.reducer;