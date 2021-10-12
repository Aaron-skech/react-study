/*
 * @Description: 
 * @Author: Aaron Peng
 * @Date: 2021-10-12 20:26:54
 * @LastEditTime: 2021-10-12 20:38:02
 * @LastEditors: Aaron Peng
 */
function bindActionCreator(actionCreator,dispatch){
    return function(...args){
        return dispatch(actionCreator.apply(this,args))
    }
    

}


function bindActionCreators(actionCreators,dispatch){

    const boundActionCreators = {};
    for(const key in actionCreators){
        const actionCreator =actionCreators[key];
        boundActionCreators[key] = bindActionCreator(actionCreator,dispatch)
    }
    return boundActionCreators;

}
export default bindActionCreators