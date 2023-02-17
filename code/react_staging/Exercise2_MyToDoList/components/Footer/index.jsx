import {Component} from "react";
import PropTypes from "prop-types";

import "./index.css";

export default class Footer extends Component{

    static propTypes = {
        checkAllTodo:PropTypes.func.isRequired,
        clearAllDone:PropTypes.func.isRequired,
    }

    handleCheckAll = (event) => {
        this.props.checkAllTodo(event.target.checked);
    }

    handleClearAllDone = () => {
        if (window.confirm("确认要删除所有已完成任务吗？")) {

            this.props.clearAllDone();
        }
    }

    render() {

        const {todos} = this.props;

        const doneCount = todos.reduce((pre,todoObj) => {
            return pre + (todoObj.done ? 1 : 0);
        },0)

        const total = todos.length;

        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === total & total !== 0 ? true : false}/>
                </label>
                <span>
                          <span>{doneCount}</span> / {total}
                        </span>
                <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
            </div>
        );
    }
}