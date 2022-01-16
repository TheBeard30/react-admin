import React from "react";
import {Button, Checkbox, Form, Input} from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './login-form.module.less';
import {useNavigate} from "react-router-dom";

export function LoginForm() {

  const navigate = useNavigate();

  const onFinish = (values: {[p: string]: any}) => {
    console.log(values);
    setTimeout(() => navigate('/home'),1000);
  };


  return (<div className={styles.container}>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className={styles.loginButton}>
          登录
        </Button>
      </Form.Item>
    </Form>
  </div>);
}
