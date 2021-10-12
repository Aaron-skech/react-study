/*
 * @Description: 
 * @Author: Aaron Peng
 * @Date: 2021-10-12 21:26:53
 * @LastEditTime: 2021-10-12 21:32:11
 * @LastEditors: Aaron Peng
 */


function combineReducers(reducers){
    /**
     * @description: 
     * @param  {*}
     * @return {*}
     * @param {*} state 老的总状态
     * @param {*} action  动作
     */    
    return function(state={},action){
          let nextState = {};
        //reducers = { counter1,counter2};
        for(let key in reducers){
            nextState[key] =  reducers[key](state[key],action);
            
        }

        return nextState;

    }
}


export default combineReducers;
