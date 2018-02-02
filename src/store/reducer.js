import {combineReducers} from 'redux'
import {UPDATE_LIST} from './actions'
const initialState={
    list:[]
}

//action {type:'UPDATE_LIST',data}

function update_list(state=[],action){
    if(action.type==UPDATE_LIST){
        return [...state,action.data]
    }
    return state
}

export default combineReducers({
    list:update_list
})