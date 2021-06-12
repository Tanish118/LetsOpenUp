import {createSlice} from '@reduxjs/toolkit';
export const commentSlice=createSlice({
    name:"comment",
    initialState:{
            commentId:null,
        },
    reducers:{
        setComment:(state,action)=>{
            state.commentId=action.payload.commentId;
        },
    },
});

export const{setComment}=commentSlice.actions;
export const selectCommentId=(state)=>state.comment.commentId;
export default commentSlice.reducer;