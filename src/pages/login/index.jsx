import React from "react";
import { Form, Input, Button, Checkbox, message } from "antd";
import { reqLogin } from "../../api";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { saveUserToRam } from "../../utils/memoryUtils";
import { saveUser } from "../../utils/storageUtils";
import "./index.less";

// 登录组件
const Login = () => {
  let history = useHistory();
  const onFinish = async (values) => {
    const { username, password } = values;
    const resposne = await reqLogin(username, password);
    if (resposne.data.result.code === "0000") {
      message.success("登录成功");
      // 将用户信息保存到localStorage及内存中
      const user = resposne.data.result.user;
      saveUser(user);
      saveUserToRam.user = resposne.data.result.user;

      // 登录成功跳转首页
      history.replace("/");
    } else {
      message.success(resposne.data.result.msg);
    }
  };
  // 如果用户已经登陆, 自动跳转到 admin
  if (saveUserToRam.user && saveUserToRam.user.id) {
    return <Redirect to="/" />;
  }
  return (
    <div className="login">
      <header>
        <h1>CHENC——React后台管理项目</h1>
      </header>
      <section className="login-content">
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
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
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
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </section>
    </div>
  );
};

export default Login;
