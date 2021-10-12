/*
 * @Description: 
 * @Author: Aaron Peng
 * @Date: 2021-10-12 20:26:54
 * @LastEditTime: 2021-10-12 21:46:03
 * @LastEditors: Aaron Peng
 */
import * as actionType from '../action-types'
let actions = {
    add1(){
        return {type:actionType.ADD1}
    },
    minus1(){
        return {type:actionType.MINUS1}
    },
    changeColor(color){
       
        return {type:actionType.CHANGE_COLOR,payload:color}
    }
    
}
export default actions;