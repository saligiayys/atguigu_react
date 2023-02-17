import React, {Component} from "react";

import {nanoid} from "nanoid";
import PropTypes from 'prop-types';

import "./index.css"

export default class Header extends Component {

    static propTypes = {
        addTodo:PropTypes.func.isRequired,
        todos:PropTypes.array.isRequired
    }

    handleKeyUp = (event) => {
        // console.log(event.keyCode) //C大写！！
        const {keyCode,target} = event;

        const {todos} = this.props;

        // console.log(keyCode)
        if (keyCode !== 13) return;
        if (target.value.trim() === "") {
            alert("输入不能为空");
            return;
        }

        //自己优化的，不能重复
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].name === target.value) {
                alert("输入重复！");
                return;
            }
        }

        const todoObj = {id:nanoid(), name:target.value, done:false};
        this.props.addTodo(todoObj);
        target.value = "";
    }

    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        );
    }
}
