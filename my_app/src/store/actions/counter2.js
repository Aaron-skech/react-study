import * as actionType from '../action-types'
let actions = {
    add2(){
        return {type:actionType.ADD2}
    },
    minus2(){
        return {type:actionType.MINUS2}
    },
    changeColor(color){
       
        return {type:actionType.CHANGE_COLOR,payload:color}
    }
    
    
}
export default actions;