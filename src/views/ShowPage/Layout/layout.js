import React, { Component } from 'react';

import { Layout, Space, List, Tag } from 'antd';
import { LikeOutlined } from '@ant-design/icons';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import './style.scss';
import ShowHeader from '../Header/index';
import ShowFooter from '../Footer/index';

import Editing from '../Editing/index';
import TagCloud from '../TagCloud/index';
import Feature from '../Feature/index';

const { Header, Content, Footer } = Layout;


const routers = [
    {
        name:"在线编辑",
        path:"/editing",
        component:Editing,
    },
    {
        name:"特色功能",
        path:"/feature",
        component:Feature,
    },
];

class Home extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* <Layout style={{ minWidth: 1260 }}> */}
          <Header className="header">
            <ShowHeader />
          </Header>
          <Layout className="content">
            <Content>
                <Switch>
                {
                    routers.map((value, index)=>{
                        return(
                            <Route key={index} path={value.path} component={value.component}></Route>
                        )
                    })
                }
                <Route path="/" component={HomeContent}></Route> {/* 根路径要放在最下面 */}
              </Switch>
            </Content>
          </Layout>
          <Footer className="footer">
            <ShowFooter />
          </Footer>
        {/* </Layout> */}
      </BrowserRouter>
    )
  }
}


const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

class HomeContent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [
                {
                    id: 1,
                    title: "1111111111111111111111111111111",
                    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                    description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
            content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
                },
                {
                    id: 2,
                    title: "2222222222222222222222222222222",
                    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                    description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
            content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
                },
            ],
            tag_list:[
                {
                    id:1,
                    name:"python",
                    icon:null,
                    href:"/select/"
                },
                {
                    id:2,
                    name:"javascript",
                    icon:null,
                    href:""
                }
            ]
        }
    }

    render() {
        return (
            <div className="home-content">
                <div className="content-up">
                    {this.state.tag_list.map((value, index)=>{
                        return(
                            <Link key={index} to={value.href}>
                                <Tag className="default-tag" icon={value.icon}>
                                    {value.name}
                                </Tag>
                            </Link>
                        )
                    })}

                </div>
                <div className="content-down">
                <List
                    split={true}
                    // bordered={true}
                    itemLayout="vertical"
                    size="large"
                    // locale={emptyText="暂无数据"}
                    pagination={{
                        onChange: page => {
                            console.log(page);
                        },
                        pageSize: 8,
                    }}
                    dataSource={this.state.list}
                    // footer={
                    //     <div>
                    //         <b>ant design</b> footer part
                    //     </div>
                    // }
                    renderItem={item => (
                        <List.Item
                            key={item.title}
                            actions={[
                                // <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                                <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                                // <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                            ]}
                            // extra={
                            //     <img
                            //         width={222}
                            //         alt="logo"
                            //         src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                            //     />
                            // }
                        >
                            <List.Item.Meta
                                // avatar={<Avatar src={item.avatar} />}
                                title={<a href={item.href}>{item.title}</a>}
                                description={item.description}
                            />
                            {/* <a href={item.href}>{item.title}</a>
                            <p>{item.description}</p> */}
                        </List.Item>
                    )}
                />
                </div>
                
            </div>
        )
    }
}

export default Home;