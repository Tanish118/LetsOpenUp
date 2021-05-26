import {GET_MESSE} from'../actions/actionType'
export const initState={
    messages:[],
    loading:false,

};
const messReducer=(state=initState,action)=>{
    switch(action.type){
        
        case GET_MESSE:
            return{
                ...state,
                messages:action.payload,
            };  
        default:
            return state;
    }
}
export default messReducer;