import React, {Component} from "react";
import "./index.css"

export default class Item extends Component {

    state = {
        mouse:false
    }

    handleMouse = (flag) => {
        return () => {
            this.setState({mouse: flag});
        }
    }

    handleCheck = (id) => {
        return (event) => {
            this.props.updateTodo(id, event.target.checked)
        }
    }

    //这里没有和上面一样使用高阶函数，而是非柯里化的方式
    handleDelete = (id,name) => {
        // alert("测试")
        if(window.confirm(`确定删除[ ${name} ]吗？`)){
            this.props.deleteTodo(id);
        }
    }

    render() {
        const {id,name,done} = this.props
        const {mouse} = this.state;
        return (
            <li style={{backgroundColor:mouse ? '#ddd':'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                <button onClick={() => this.handleDelete(id,name)} className="btn btn-danger" style={{display: mouse? "block" : "none"}}>删除</button>
            </li>
        );
    }
}