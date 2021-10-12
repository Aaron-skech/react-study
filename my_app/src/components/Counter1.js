
import React, {Component} from 'react';
import { bindActionCreators} from 'redux';
import store from '../store';
import actions from '../store/actions/counter1'



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