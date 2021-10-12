/*
 * @Description: 
 * @Author: Aaron Peng
 * @Date: 2021-10-12 20:26:54
 * @LastEditTime: 2021-10-12 22:40:36
 * @LastEditors: Aaron Peng
 */
import {createStore } from 'redux';
import rootReducer from './reducers'


let store = createStore(rootReducer);

export default store;