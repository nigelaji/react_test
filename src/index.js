// // 项目入口执行的js文件
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// // import App from './App';
// // import reportWebVitals from './reportWebVitals';
// import {TodoList} from './UniversalComponent';

// import { NavBar } from './indexComponents';

// // JSX语法 <App />
// ReactDOM.render(
//   // <React.StrictMode>
//   //   <App /> 
//   // </React.StrictMode>,
//   <NavBar />,
//   document.getElementById('root')
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
import { Layout } from 'antd';
// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './style.css';
import AppHeader from './components/Header/index';
import AppFooter from './components/Footer/index';

const { Header, Content, Footer, Sider } = Layout;

class App extends Component {
  render() {
    return (
      <Layout style={{minWidth: 1300 }}>
        <Header className="header">
          <AppHeader />
        </Header>
        <Layout>
          <Content className="content">Content</Content>
          <Sider className="sider">Sider</Sider>
        </Layout>
        <Footer className="footer">
          <AppFooter />
        </Footer>
      </Layout>
    )
  }
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
);