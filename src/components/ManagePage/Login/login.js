import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './style.css';
import { Component } from 'react';
import { Link } from 'react-router-dom';

const onFinish = (values) => {
  // console.log(values);// 这里面可以写登录验证
  const test_user = {
    username: "test",
    password: "111",
  }
  for (let key in values) {
    console.log(values[key] === test_user[key]);
  }
};

class Login extends Component {

  constructor(props) {
    super(props);
    this.checkLogin = this.checkLogin.bind(this);
  }

  checkLogin(e) {
    console.log('------')
  }

  render() {
    return (
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: '请输入用户名',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: '请输入密码',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="密码"
          />
        </Form.Item>
        <Form.Item className="forgot_password">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>记住我</Checkbox>
          </Form.Item>

          <Link className="login-form-forgot" to="/forgot_password">
            忘记密码
        </Link>
        </Form.Item>

        <Form.Item className="login_btn">
          <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.checkLogin}>
            登录
        </Button>
          <em>&emsp;</em>
          <Button type="primary" className="login-form-button">
            <Link to="/register">注册</Link>
          </Button>

        </Form.Item>
      </Form>
    )
  }
}

const ForgotPassword = ()=>{
  return (
    <div>
        找管理员给你重置一个
    </div>
  )
}

export  {Login, ForgotPassword};