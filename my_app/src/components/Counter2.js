
import React, {Component} from 'react';
import { bindActionCreators} from 'redux';
import store from '../store';
import actions from '../store/actions/counter2'



let boundActions = bindActionCreators(actions,store.dispatch)
export default class Counter2 extends Component{
   
    componentDidMount(){
       this.unsubscribe = store.subscribe(()=>{
            this.setState({number:store.getState().counter1.number})
        })

    }
    componentWillUnmount(){
      //  this.unsubscribe()
    }
    render(){
        return(
            <div>
                <p>{this.state.number}</p>
                <button onClick={boundActions.add2}>+</button>
                <button onClick={boundActions.minus2}>-</button>
            </div>
        )
    }
}