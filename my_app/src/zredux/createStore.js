/*
 * @Descrfang'huifanghui
 * @Author: Aaron Peng
 * @Date: 2021-10-12 20:26:54
 * @LastEditTime: 2021-10-12 22:45:50
 * @LastEditors: Aaron Peng
 */


function createStore(reducer,preloadState){
    let listeners = [];
    let state = preloadState;
    function getState(){
        return state;
    }
    function dispatch(action){
        state =  reducer(state,action)
        listeners.forEach(l=>l())
        return action;
    }
    function subscribe(listener){
        listeners.push(listener)
        return ()=>{
            listeners=listeners.filter(l=>l!=listener)
        }
 
    }
    dispatch({type:'@@REDUX/INIT'})

    return {
        getState,//获取仓库最新状态
        dispatch,//向仓库派发的动作
        subscribe,//用来订阅仓库状态的变化
    }
 
 
 }

 export default createStore;