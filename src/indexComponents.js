import React, { Component, Fragment } from 'react';

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.editingGetItems = this.editingGetItems.bind(this);
        this.keyUpToSearch = this.keyUpToSearch.bind(this);

        this.state = {
            "inputValue":"",
            "routes":['首页', '云标签', '特色功能', '我的推荐', '聊天室']
        }
    }

    editingGetItems(e){
        // 业务描述：当用户正在输入中，延迟一秒向后端请求，后端返回前5条的搜索结果返回渲染成li标签列表。
        // this.state.inputValue = e.target.value;
        this.setState({
            "inputValue": e.target.value
        })
        // 现在想实现一个1秒内无输入事件时，发送一个异步请求后端然后返回items。
    }

    keyUpToSearch(e){
        // 当用户输入完成后，enter键，整个页面内容区域渲染返回的搜索结果
        if(e.keyCode===13 && e.target.value!==''){
            
        }
    }

    render() {
        return (
            <Fragment>
                <header>
                    <div className="logo">
                        <a href="/">
                        </a>
                    </div>
                    <div className="search">
                        <input
                            onInput={this.editingGetItems}
                            onKeyUp={this.keyUpToSearch}    
                        />
                    </div>
                    <div className="route">
                        <ul>
                            {this.state.routes.map((value, index)=>{
                                return (
                                    <li key={index}>{value}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="other"></div>
                </header>
            </Fragment>
        )
    }
}



class Content extends Component {

}


class Footer extends Component {


}


export { NavBar, Content, Footer };