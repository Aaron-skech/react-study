import React, {Component} from 'react';
//import { bindActionCreators} from 'zredux';
//import store from '../store';
import actions from '../store/actions/counter2';
import {connect} from 'react-redux';
import { useSelector,useDispatch} from  'react-redux';



//let boundActions = bindActionCreators(actions,store.dispatch)
function Counter2(props) {
    // state =store.getState().counter1;
    // componentDidMount(){
    //    this.unsubscribe = store.subscribe(()=>{
    //         this.setState(store.getState().counter1)
    //     })

    // }
    // componentWillUnmount(){
    //     this.unsubscribe()
    // }
    // render(){
    //     let { color,number,add2,minus2,changeColor} = this.props
    let counter2 = useSelector(state=>state.counter2);
    let dispatch = useDispatch()
    const {number,color} = counter2;
        return(
            <div style={{color}}>
                <p>{number}</p>
                <button onClick={dispatch(actions.add2())}>+</button>
                <button onClick={dispatch(actions.minus2())}>-</button>
                <button onClick={()=>dispatch(actions.changeColor('green')) }>改成绿色</button>
            </div>
        )
    // }
}
export default Counter2;
// //把仓库中的状态映射为属性对象
// let mapStateToProps = state => state.counter2;
// // let mapDispatchToProps = state => state.counter1;

// export default connect(
//     mapStateToProps,
//     actions,
//     )(Counter2)