function bindActionCreator(actionCreator,dispatch){
    return function(...args){
        return dispatch(actionCreator.apply(this,args))
    }
    

}


function bindActionCreators(actionCreators,dispatch){
    if(typeof actionCreators === 'function'){
       return bindActionCreator(bindActionCreators,dispatch)
    }
    const boundActionCreators = {};
    for(const key in actionCreators){
        const actionCreator =actionCreators[key];
        boundActionCreators[key] = bindActionCreator(actionCreator,dispatch)
    }
    return boundActionCreators;

}
export default bindActionCreators