# 数据容器 
    * MVVM架构 Model（数据）+View（视图）+ViewModel（桥梁）*
    特点：
    
        1.数据驱动视图 defineProperty+模板编译
            new Vue({
                data:{
                    info:''
                },
                methods:{
                    fn(){
                        this.info=123//会触发defineProperty的set过程
                    }
                }
            })

        2.组件化（渐进式增量）
            组件传值：
                a. props(属性传值)
                b. 事件派发(每一个vue组件或者实例本质上都是一个事件派发器) v-on
                c. global event bus
                e. $parent,$children(不建议使用)
                f. vuex(数据容器)


# Redux

    是react生态系统中一个重要组成部分（react-router）
    它并不直接作用于react，redux可以结合其他框架或者js原生进行使用
    函数式编程一个深度应用，函数可以作为参数进行传递，函数的执行是异步逻辑决定的

    api
        9.1. createStore(reducer,[initialState],[store enhancer]) //创建容器
            reducer:function(){} 
            initialState: 容器的初始值
        9.2. Store  //数据容器 是一个对象（看不到的）
            数据由reducer决定
           dispatch(action) //触发一个动作，action本质是一个对象

           getState() //获取store的数据

           subscribe() //快照，监听每一次数据发生变化   

        9.3. combineReducers //合并reducer=>纯函数(辅助)
        9.4. applyMiddleware //中间件


    在React中，数据的传递主要采用state和props，props得由父级分发下来，而state是组件中可自行管理的状态，这意味着React并没有让数据回溯的能力，数据只能单向向下分发，或者自行内部处理，举一个简单的例子，父组件可以使用props向子组件传递数据，子组件可以通过触发回调函数来改变父组件的状态，如果是那种没有嵌套关系的组件，该如何来实现通信呢？为了解决这个问题,Redux的方法就是将store放在根目录顶层组件中，一层层往下分发给各子组件,在子组件中进行调用，Redux的作用是让状态变得更加可预测、并且更容易管理。

# React-Redux API
    <Provider store>  React组件
    connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])(component) //高阶函数，会返回高阶组件
        mapStateToProps:把数据容器中的数据映射到组建的props上
        mapDispatchToProps:把数据容器中的dispatch函数映射到props上
        mergeProps:对前面映射的的props还有组件自身拥有的props进行合并，Object.assgin({},stateProps,dispatchProps,ownProps)  

    1. 创建React视图容器
    2. 创建store数据容器，reducer，actions，action creator
    3. 通过Provider store
    4. 利用enhancedApp = connect(function(){},,,)(App)



react生态系统的核心
React  ReactRouter  Redux  React-Redux  redux-logger redux-saga(异步操作 generator)  




