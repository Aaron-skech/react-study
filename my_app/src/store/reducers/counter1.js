/*
 * @Description:
 * @Author: Aaron Peng
 * @Date: 2021-10-12 20:26:54
 * @LastEditTime: 2021-10-12 21:15:27
 * @LastEditors: Aaron Peng
 */
import * as actionType from '../action-types'
//Counter1组件的对应的state
let initalState = {number:0,color:'black'};

//Counter1组件的对应的reducer
function counter1(state = initalState,action){
    switch(action.type){
        case actionType.ADD1:
            return {...state,number:state.number+1};
        case actionType.MINUS1:
            return {...state,number:state.number-1};
        case actionType.CHANGE_COLOR:
            return {...state,color:action.payload};
         default:
             return state; 
    }
 
 }

 export default counter1;