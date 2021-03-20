import React, { Component } from "react";
// import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import "./index.less";

// const { Header } = Layout;
export default class Header extends Component {
  render() {
    return (
      <div className="header" style={{ padding: 0 }}>
        {/* {React.createElement(
          this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: "trigger",
            // onClick: this.toggle,
          }
        )} */}
      </div>
    );
  }
}
