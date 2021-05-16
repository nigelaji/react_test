import React, { Component, Fragment } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import './style.css';
import axios from 'axios';

class ShowHeader extends Component {

    constructor(props) {
        super(props);

        this.editingGetItems = this.editingGetItems.bind(this);
        this.keyUpToSearch = this.keyUpToSearch.bind(this);

        this.state = {
            menus: [
                {
                    id: 1,
                    path: '/',
                    name: '首页'
                },
                {
                    id: 2,
                    path: '/editing',
                    name: '在线编辑'
                },
                {
                    id: 3,
                    path: '/feature',
                    name: '特色功能'
                }
            ]
        }
    }

    editingGetItems(e) {
        // 业务描述：当用户正在输入中，延迟一秒向后端请求，后端返回前5条的搜索结果返回渲染成li标签列表。
        // this.state.inputValue = e.target.value;
        this.setState({
            "inputValue": e.target.value.trim()
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
                <Link to="/">
                    <div className="app-header-logo" 
                    />
                </Link>
                <div className="app-header-search-box">
                    <input className="app-header-search"
                        onInput={this.editingGetItems}
                        onKeyUp={this.keyUpToSearch}
                    />
                </div>
                <Menu className="app-header-menu" theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    {
                        this.state.menus.map((menu, index) => {
                            return (
                                <Menu.Item key={index}>
                                    <Link to={menu.path}>
                                        {menu.name}
                                    </Link>
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
        }).catch((err) => {
            console.log(err);
        });
    }
}

export default ShowHeader;