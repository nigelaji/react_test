import React, { Component, Fragment } from 'react';

const liLevel = {
    "[1]": "red",
    "[2]": "red",
    "[3]": "red",
};

class TodoList extends Component {
    
    constructor(props) {
        super(props);

        this.inputChange = this.inputChange.bind(this); // 对于这种bind(this)，可以放在constructor中写成这种方式，提高性能
        this.inputKeyUp = this.inputKeyUp.bind(this);

        this.state = {
            inputValue: '',
            list: []
        };
    }

    inputChange(e) {
        // console.log(this); // 为啥是undefined的呢，不应该是TodoList这个组件吗
        // this.state.value = e.target.value; // state里面的数据不能直接改，需要通过setState()
        this.setState({
            inputValue: e.target.value
        });
    }

    inputKeyUp(e) {
        if (e.keyCode === 13 && e.target.value !== '') {
            let value;
            if(e.target.value.slice(0,3)==="[1]"){
                value = `<h2>${this.state.inputValue.slice(3)}</h2>`;
            }else if(e.target.value.slice(0,3)==="[2]"){
                value = `<h3>${this.state.inputValue.slice(3)}</h3>`;
            }else if(e.target.value.slice(0,3)==="[3]"){
                value = `<h4>${this.state.inputValue.slice(3)}</h4>`;
            }else{
                value = this.state.inputValue;
            }
            const list = [...this.state.list, value];
            this.setState({
                // list: this.state.list.push(this.state.inputValue)  不能这样写
                list: list,
                inputValue: ''
            })
        }
    }

    liClick(index) {
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list
        });
    }

    getLiList() {
        return this.state.list.map((value, index) => {
            return (
                <li 
                    key={index} 
                    onClick={this.liClick.bind(this, index)}
                    dangerouslySetInnerHTML={{__html: value}}   // 这种就是可以将value中的html标签进行转义
                >
                    {/* {value} */}
                </li>
            )   //  bind中除了可以传递this，还可以传递你想传递的东西
        })  // 列表的循环可以写在一个函数中
    }

    render() {
        return (
            <Fragment>
                <label htmlFor="myinput">请输入任务：</label>
                <input
                    id="myinput"
                    className="input"    // 样式用className
                    value={this.state.inputValue}
                    onChange={this.inputChange}  // 如果此事件函数不bind(this)的话，则this指向的是undefined
                    onKeyUp={this.inputKeyUp}
                // placeholder="请输入任务"
                />
                <ul>
                    {this.getLiList()}
                </ul>
            </Fragment>
        )
    }
}

export { TodoList };
/*
return() 括号中只能有一个标签在最外层，不过现在可以通过<Fragment></Fragment>占位标签来解决此问题，此标签不会有任何标签生成
*/