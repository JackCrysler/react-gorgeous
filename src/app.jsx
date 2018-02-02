import React,{Component} from 'react'
import {connect} from 'react-redux'
import {UPDATE_LIST,update_list_action_creator} from './store/actions'
class App extends Component{
    constructor(){
        super()
        this.add = this.add.bind(this)
    }
    add(e){
        this.props.fn(this.refs.poem.value)
        this.refs.poem.value=''
    }
    render(){
        let {list} = this.props
        return <div>
            <input type="text" ref="poem"  onKeyDown={(e)=>{if(e.keyCode==13)this.add()}}/>
            <hr/>
            <ul>
                {
                    list.map((item,index)=>{
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
        </div>
    }
    componentDidMount(){
        console.log(this.props)
    }
}

function mapStateToProps(state){
    console.log(state)
    return {
        list:state.list
    }
}
function mapDispatchToProps(dispatch){
    return {
        fn:function(data){
            dispatch(update_list_action_creator(data))
        }
    }
}
function mergeProps(stateProps,dispatchProps,props){
    return Object.assign({},stateProps,dispatchProps,props)
}

let enhancer = connect(mapStateToProps,mapDispatchToProps,mergeProps)
let EnhancedApp = enhancer(App)
export default EnhancedApp