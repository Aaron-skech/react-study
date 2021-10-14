/*
 * @Description: 
 * @Author: Aaron Peng
 * @Date: 2021-10-12 20:26:54
 * @LastEditTime: 2021-10-14 21:07:29
 * @LastEditors: Aaron Peng
 */
import * as actionType from '../action-types'
//Counter1组件的对应的state
let initalState = {number:0,color:'black'};

//Counter1组件的对应的reducer
function counter2(state = initalState,action){
    switch(action.type){
        case actionType.ADD2:
            return {...state,number:state.number+1};
        case actionType.MINUS2:
            return {...state,number:state.number-1};
        case actionType.CHANGE_COLOR:
            return {...state,color:action.payload};
         default:
             return state; 
    }
 
 }

 export default counter2;