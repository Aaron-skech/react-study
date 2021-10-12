import { combineReducers }from 'redux';
import Counter1  from './counter1';
import Counter2  from './counter2';

 let rootReducer = combineReducers({
    Counter1,
    Counter2
})
export default rootReducer;