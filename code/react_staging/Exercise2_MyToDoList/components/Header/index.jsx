import {Component} from "react";
import {nanoid} from "nanoid";
import PropTypes from "prop-types";

import "./index.css";

export default class Header extends Component{

    static propTypes = {
        addTodo:PropTypes.func.isRequired,
        todos:PropTypes.array.isRequired
    }

    handleKeyUp = (event) => {
        const {target,keyCode} = event;
        const {todos} = this.props;

        if (keyCode !== 13) return;
        if (target.value.trim() === "") {
            alert("输入不能为空！");
            return;
        }

        for (let i = 0; i < todos.length; i++) {
            if (todos[i].name === target.value) {
                alert("输入重复！");
                return;
            }
        }

        const newTodoObj = {id:nanoid(), name:target.value,done:false};
        this.props.addTodo(newTodoObj);
        target.value = "";
    };

    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        );
    }
}