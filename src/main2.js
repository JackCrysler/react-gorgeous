import {createStore,combineReducers,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers/reducer'
import { setTimeout } from 'timers';
let increment = document.querySelector('#increment')
let decrement = document.querySelector('#decrement')
let span = document.querySelector('#root span') 
let input = document.querySelector('#root2 input')
let add = document.querySelector('#root2 button')
let ul = document.querySelector('#root2 ul')
let input3 = document.querySelector('#root3 input')
let info = document.querySelector('#root3 .update_info')
let age = document.querySelector('#root3 .update_age')

let middlewares=[applyMiddleware(logger),applyMiddleware(thunk)];
function myMiddleWare(getState,dispatch){
    return (next)=>(action)=>{
        console.log(action)
        setTimeout(()=>{
            next(action)
        },1000)
        
    }
}


//初始数据
const initialState={
    count:100,
    list:[],
    obj:{
        info:'',
        age:123
    }
}

//创建数据容器
const Store = createStore(reducer,...middlewares)
//action
increment.onclick=function(){
    Store.dispatch({
        type:'increment',
        step:1
    })
}
decrement.onclick=function(){
    Store.dispatch({
        type:'decrement',
        step:1
    })
}
add.onclick=function(){
    let data = input.value;
    Store.dispatch({
        type:'add',
        data
    })
}
info.onclick=function(){
    Store.dispatch({
        type:'update-info',
        data:input3.value
    })
}
age.onclick=function(){
    Store.dispatch({
        type:'update-age',
        data:input3.value
    })
}

//根级reducer
/* function reducer(state=initialState,action){
    console.log(state)
    return {
        count:handleCount(state.count,action),
        list:handleList(state.list,action)
    }
} */



Store.subscribe(()=>{
    //console.log(Store.getState())

    span.innerHTML = Store.getState().count;

    ul.innerHTML=`${Store.getState().list.map((item,index)=>{
        return `<li>${item}</li>`
    }).join('')}`
})

