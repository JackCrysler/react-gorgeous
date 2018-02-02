
import {combineReducers } from 'redux'
//reducer
function count(state=123,action){
    switch (action.type){
        case "increment":return state+action.step;
        break;
        case 'decrement':return state-action.step;
        break;
        default:return state
    }
}
function handleList(state=[],action){
    if(action.type=='add'){
        return [...state,action.data]
    }
    return state
}

function handleInfo(state='',action){
    if(action.type=='update-info'){
        return action.data
    }
    return state
}

function handleAge(state=100,action){
    if(action.type=='update-age'){
        return action.data
    }
    return state
}

/* function obj(state,action){
    return {
        info:handleInfo(state.info,action),
        age:handleAge(state.age,action)
    }
} */
let obj = combineReducers({
    info:handleInfo,
    age:handleAge
})



let reducer = combineReducers({
    count,
    list:handleList,
    obj
})

export default reducer