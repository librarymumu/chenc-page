import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { saveUserToRam } from "../../utils/memoryUtils";
import { Layout } from "antd";
import LeftNav from "../../component/left-nav";
import Header from "../../component/header";
import Home from "../home";
import User from "../user";
import Category from "../category";
import Role from "../role";
import "./index.less";

const { Content, Footer } = Layout;

export default class Admin extends Component {
  state = {
    collapsed: false,
  };

  render() {
    // 若没有登录直接跳转登录页面
    const user = saveUserToRam.user;
    if (!user.id) {
      return <Redirect to="/login"></Redirect>;
    }
    return (
      <Layout style={{ height: "100%" }}>
        <LeftNav />
        <Layout className="site-layout">
          <Header />
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Switch>
              <Route path="/home" component={Home}></Route>
              <Route path="/user" component={User}></Route>
              <Route path="/category" component={Category}></Route>
              <Route path="/role" component={Role}></Route>
              <Redirect to="/home"></Redirect>
            </Switch>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            CHENC DEMO ©2021 Created by CHENCHEN
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
