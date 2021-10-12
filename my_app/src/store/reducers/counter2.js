import * as actionType from '../action-types'
//Counter1组件的对应的state
let initalState = {number:0};

//Counter1组件的对应的reducer
function counter2(state = initalState,action){
    switch(action.type){
        case actionType.ADD2:
            return {number:state.number+1};
        case actionType.MINUS2:
            return {number:state.number-1};
         default:
             return state; 
    }
 
 }

 export default counter2;