// // 项目入口执行的js文件
import React from 'react';
import ReactDOM from 'react-dom';
// // import reportWebVitals from './reportWebVitals';
import './style.css';
import Page from './Page';



ReactDOM.render(
  <Page />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);