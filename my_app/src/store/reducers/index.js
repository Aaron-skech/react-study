/*
 * @Description: 
 * @Author: Aaron Peng
 * @Date: 2021-10-12 20:26:54
 * @LastEditTime: 2021-10-12 22:40:39
 * @LastEditors: Aaron Peng
 */
import { combineReducers }from 'redux';
import counter1  from './counter1';
import counter2  from './counter2';

 let rootReducer = combineReducers({
    counter1,
    counter2
})
export default rootReducer;