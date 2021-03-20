import React, { Component } from "react";
import { Layout, Menu } from "antd";
// import {
//   HomeOutlined,
//   SettingOutlined,
//   AppstoreAddOutlined,
//   TeamOutlined,
//   ShoppingOutlined,
// } from "@ant-design/icons";
import * as Icon from "@ant-design/icons";
import { Link } from "react-router-dom";
import menuList from "../../config/menuConfig";
const { Sider } = Layout;
const { SubMenu } = Menu;

export default class LeftNav extends Component {
  menuNodes = (menuList) => {
    return menuList.map((item) => {
      // antd4.0动态加载icon
      const icon = React.createElement(Icon[item.icon], {
        style: { fontSize: "16px" },
      });
      if (!item.children) {
        const icon = React.createElement(Icon[item.icon], {
          style: { fontSize: "16px" },
        });
        return (
          <Menu.Item key={item.key} icon={icon}>
            <Link to={item.path}>{item.title}</Link>
          </Menu.Item>
        );
      } else {
        return (
          <SubMenu key={item.key} icon={icon} title={item.title}>
            {item.children.map((ctem) => {
              const childicon = React.createElement(Icon[ctem.icon], {
                style: { fontSize: "16px" },
              });
              return (
                <Menu.Item key={ctem.key} icon={childicon}>
                  <Link to={ctem.path}>{ctem.title}</Link>
                </Menu.Item>
              );
            })}
          </SubMenu>
        );
      }
    });
  };
  render() {
    return (
      <Sider collapsible>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          {this.menuNodes(menuList)}
          {/* <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/home">首页</Link>
          </Menu.Item>
          <SubMenu key="sub1" icon={<AppstoreAddOutlined />} title="商品管理">
            <Menu.Item key="2" icon={<ShoppingOutlined />}>
              <Link to="/category">商品分类</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<SettingOutlined />} title="系统设置">
            <Menu.Item key="4" icon={<TeamOutlined />}>
              <Link to="user">系统用户</Link>
            </Menu.Item>
          </SubMenu> */}
        </Menu>
      </Sider>
    );
  }
}
