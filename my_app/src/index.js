// import {createStore} from './redux';

// let initalState = 0;
// const ADD = 'ADD';
// const MINUS = 'MINUS';

// function reducer(oldState,action){
//    switch(action.type){
//        case ADD:
//            return oldState+1;
//        case MINUS:
//            return oldState-1;
//         default:
//             return oldState; 
//    }

// }

//  let store = createStore(reducer,initalState);

//  let conterValue = document.getElementById('counter-value');
//  let addBtn = document.getElementById('add-btn');
//  let minusBtn = document.getElementById('minus-btn');
//  function render(){
//      conterValue.innerHTML = store.getState();
//  }

//  render();
//  store.subscribe(render);
//  addBtn.addEventListener('click',()=>store.dispatch({type:ADD}));
//  minusBtn.addEventListener('click',()=>store.dispatch({type:MINUS}))

import React from 'react';
import ReactDOM from 'react-dom';
import Counter1 from './components/Counter1.js';

ReactDOM.render(<Counter1/>,document.getElementById('root'))