

function createStore(reducer,preloadState){
    let listener = [];
    let state = preloadState;
    function getState(){
        return state;
    }
    function dispatch(action){
        state =  reducer(state,action)
        listener.forEach(l=>l())
        return action;
    }
    function subscribe(listen){
        listener.push(listen)
 
    }
    dispatch({type:'@@REDUX/INIT'})

    return {
        getState,//获取仓库最新状态
        dispatch,//向仓库派发的动作
        subscribe,//用来订阅仓库状态的变化
    }
 
 
 }

 export default createStore;