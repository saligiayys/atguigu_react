import {Component} from "react";

import PropTypes from "prop-types";

import "./index.css";

export default class Item extends Component{

    static propTypes = {
        updateTodo:PropTypes.func.isRequired,
        deleteTodo:PropTypes.func.isRequired,
    }

    state = {
        mouse:false
    }

    handleMouse = (flag) => {
        return () => {
            this.setState({mouse:flag})
        }
    }

    handleCheck = (id) => {
        return (event) => {
            this.props.updateTodo(id,event.target.checked);
        }
    }

    handleDelete = (id,name) => {
        return () => {
            if (window.confirm(`确定要删除${name}么？`)) {
                this.props.deleteTodo(id);
            }
        }
    }


    render() {
        const {id,name,done} = this.props;
        const {mouse} = this.state
        return (
            <li style={{backgroundColor: mouse ? "#ddd" : "white"}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" onChange={this.handleCheck(id)} checked={done}/>
                    <span>{name}</span>
                </label>
                <button onClick={this.handleDelete(id,name)} className="btn btn-danger" style={{display: mouse ? "block" : "none"}}>删除</button>
            </li>
        );
    }
}