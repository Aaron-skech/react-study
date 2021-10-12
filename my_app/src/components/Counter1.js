/*
 * @Description: 
 * @Author: Aaron Peng
 * @Date: 2021-10-12 20:26:54
 * @LastEditTime: 2021-10-12 23:14:19
 * @LastEditors: Aaron Peng
 */

import React, {Component} from 'react';
//import { bindActionCreators} from 'redux';
//import store from '../store';
import actions from '../store/actions/counter1';
import {connect} from 'react-redux';
import * as actionType from '../store/action-types'



//let boundActions = bindActionCreators(actions,store.dispatch)
 class Counter1 extends Component{
    // state =store.getState().counter1;
    // componentDidMount(){
    //    this.unsubscribe = store.subscribe(()=>{
    //         this.setState(store.getState().counter1)
    //     })

    // }
    // componentWillUnmount(){
    //     this.unsubscribe()
    // }
    render(){
        let { color,number,add1,minus1,changeColor} = this.props
        return(
            <div style={{color}}>
                <p>{number}</p>
                <button onClick={add1}>+</button>
                <button onClick={minus1}>-</button>
                <button onClick={()=>changeColor('red') }>改成红色</button>
            </div>
        )
    }
}
//把仓库中的状态映射为属性对象
let mapStateToProps = state => state.counter1;
 let mapDispatchToProps = dispatch => ({
    add1(){
        dispatch({type:actionType.ADD1});
    },
    minus1(){
        dispatch({type:actionType.MINUS1}); 
    },
    changeColor(color){
        dispatch({type:actionType.CHANGE_COLOR,payload:color}); 
        
    }
 });

export default connect(
    mapStateToProps,
   // mapDispatchToProps
    actions,
    )(Counter1)