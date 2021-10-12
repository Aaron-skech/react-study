
import React, {Component} from 'react';
import { bindActionCreators} from 'redux';
import store from '../store';
import actions from '../store/actions/counter1'



let boundActions = bindActionCreators(actions,store.dispatch)
export default class Counter1 extends Component{
    state = {number:store.getState().counter1.number};
    componentDidMount(){
       this.unsubscribe = store.subscribe(()=>{
            this.setState({number:store.getState().counter1.number})
        })

    }
    componentWillUnmount(){
        this.unsubscribe()
    }
    render(){
        return(
            <div>
                <p>{this.state.number}</p>
                <button onClick={boundActions.add1}>+</button>
                <button onClick={boundActions.minus1}>-</button>
            </div>
        )
    }
}