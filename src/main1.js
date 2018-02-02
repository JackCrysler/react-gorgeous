import {createStore} from 'redux'
//获取DOM

    let increment = document.querySelector('#increment')
    let decrement = document.querySelector('#decrement')
    let span = document.querySelector('span')

//创建数据容器
const store = createStore(reducer) //reducer来自array的reduce函数

//通过action来触发store的数据变化
increment.onclick=function(){
    store.dispatch({
        type:'increment',//按照约定contract大家都是用type来描述一个action的
        step:2
    })
}
decrement.onclick=function(){
    store.dispatch({
        type:'decrement'//按照约定大家都是用type来描述一个action的
    })
}


//定义reducer，改变store的数据，纯函数，对action的一个描述
function reducer(state=100,action){
    console.log(action)
    if(action.type=='increment'){
        return state+action.step
    }else if(action.type=='decrement'){
        return --state
    }
}


//监听数据的每一次变化
store.subscribe(function(){
    console.log(store.getState())
    //更新视图
    span.innerHTML=store.getState()
})