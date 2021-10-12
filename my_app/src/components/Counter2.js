import React, {Component} from 'react';
//import { bindActionCreators} from 'zredux';
//import store from '../store';
import actions from '../store/actions/counter2';
import {connect} from 'react-redux';



//let boundActions = bindActionCreators(actions,store.dispatch)
class Counter2 extends Component{
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
        let { color,number,add2,minus2,changeColor} = this.props
        return(
            <div style={{color}}>
                <p>{number}</p>
                <button onClick={add2}>+</button>
                <button onClick={minus2}>-</button>
                <button onClick={()=>changeColor('green') }>改成绿色</button>
            </div>
        )
    }
}
//把仓库中的状态映射为属性对象
let mapStateToProps = state => state.counter2;
// let mapDispatchToProps = state => state.counter1;

export default connect(
    mapStateToProps,
    actions,
    )(Counter2)