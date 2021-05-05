import React, { Component, Fragment } from 'react';
import { Menu } from 'antd';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './style.css';
import axios from 'axios';

class AppHeader extends Component {

    constructor(props) {
        super(props);

        this.editingGetItems = this.editingGetItems.bind(this);
        this.keyUpToSearch = this.keyUpToSearch.bind(this);

        this.state = {
            headerMenus: [
                {
                    id: 1,
                    path: '/',
                    menuName: '首页'
                },
                {
                    id: 2,
                    path: '/tagcloud',
                    menuName: '标签云'
                },
                {
                    id: 3,
                    path: '/feature',
                    menuName: '特色功能'
                }
            ]
        }
    }

    editingGetItems(e) {
        // 业务描述：当用户正在输入中，延迟一秒向后端请求，后端返回前5条的搜索结果返回渲染成li标签列表。
        // this.state.inputValue = e.target.value;
        this.setState({
            "inputValue": e.target.value
        })
        // 现在想实现一个1秒内无输入事件时，发送一个异步请求后端然后返回items。
    }

    keyUpToSearch(e) {
        // 当用户输入完成后，enter键，整个页面内容区域渲染返回的搜索结果
        if (e.keyCode === 13 && e.target.value !== '') {

        }
    }

    render() {
        return (
            <Fragment>
                <div className="app-header-logo" />
                <div className="app-header-search-box">
                    <input className="app-header-search"
                        onInput={this.editingGetItems}
                        onKeyUp={this.keyUpToSearch}
                    />
                </div>
                <Menu className="app-header-menu" theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    {
                        this.state.headerMenus.map((menu) => {
                            return (
                                <Menu.Item key={menu.id} Link={menu.path}>
                                    {menu.menuName}
                                </Menu.Item>
                            )
                        })
                    }
                </Menu>
            </Fragment>
        )
    }

    componentDidMount() {
        // 获取实时搜索结果列表
        axios.get('').then((res) => {
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        });
    }
}

export default AppHeader;