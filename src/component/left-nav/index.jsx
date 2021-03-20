import React, { Component } from "react";
import { Layout, Menu } from "antd";
import * as Icon from "@ant-design/icons";
import { Link, withRouter } from "react-router-dom";
import menuList from "../../config/menuConfig";
const { Sider } = Layout;
const { SubMenu } = Menu;

class LeftNav extends Component {
  getMenuNodes = (menuList) => {
    const { pathname } = this.props.location;
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
        if (item.children.find((ctem) => ctem.key === pathname)) {
          this.openKey = item.key;
        }
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

  UNSAFE_componentWillMount() {
    this.menuNodes = this.getMenuNodes(menuList);
  }
  render() {
    const { pathname } = this.props.location;
    const { openKey } = this;
    console.info("this.openKey", this.openKey);
    return (
      <Sider collapsible>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[pathname]}
          defaultOpenKeys={[openKey]}
        >
          {this.menuNodes}
        </Menu>
      </Sider>
    );
  }
}
export default withRouter(LeftNav);
