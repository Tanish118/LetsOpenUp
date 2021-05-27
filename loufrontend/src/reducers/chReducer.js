import {GET_CHANNELS} from'../actions/actionType'
export const initState={
    channels:[],  

};
const chReducer=(state=initState,action)=>{
    switch(action.type){
        
        case GET_CHANNELS:
            return{
                ...state,
                channels:action.payload,
            };       
       
        
        default:
            return state;
    }
}
export default chReducer;