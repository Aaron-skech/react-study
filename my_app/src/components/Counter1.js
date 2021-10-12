
import React, {Component} from 'react';
import {createStore, bindActionCreators} from '../redux';
let initalState = {number:0};
const ADD = 'ADD';
const MINUS = 'MINUS';

// function add(){
//     return {type:ADD}
// };
// function minus(){
//     return {type:MINUS}
// };
let actions = {
    add(){
        return {type:ADD}
    },
    minus(){
        return {type:MINUS}
    }
    
}


function reducer(state = initalState,action){
   switch(action.type){
       case ADD:
           return {number:state.number+1};
       case MINUS:
           return {number:state.number-1};
        default:
            return state; 
   }

}
let store = createStore(reducer);
// let boundAdd = bindActionCreators(add,store.dispatch);
// let boundMinus = bindActionCreators(minus,store.dispatch)
let boundActions = bindActionCreators(actions,store.dispatch)
export default class Counter1 extends Component{
    //state = {number:store.getState().number};
    componentDidMount(){
       this.unsubscribe = store.subscribe(()=>{
            this.setState({number:store.getState().number})
        })

    }
    componentWillUnmount(){
      //  this.unsubscribe()
    }
    render(){
        return(
            <div>
                <p>{store.getState().number}</p>
                <button onClick={boundActions.add}>+</button>
                <button onClick={boundActions.minus}>-</button>
            </div>
        )
    }
}