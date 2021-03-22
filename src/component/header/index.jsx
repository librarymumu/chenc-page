import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { formateDate } from "../../utils/dateUtils";
import { removeUser } from "../../utils/storageUtils";
import { saveUserToRam } from "../../utils/memoryUtils";
import menuList from "../../config/menuConfig";
import { Modal } from "antd";
import "./index.less";

class Header extends Component {
  state = {
    sysTime: formateDate(Date.now()),
  };

  // 每过一秒重新渲染页面（时间更新）
  getSysTime = () => {
    this.intervalId = setInterval(() => {
      this.setState({
        sysTime: formateDate(Date.now()),
      });
    }, 1000);
  };

  // render完成之后执行;
  componentDidMount() {
    this.getSysTime();
  }

  // 移除组件之前停止定时器
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  // 退出
  logout = () => {
    Modal.confirm({
      content: "确定退出吗",
      onOk: () => {
        removeUser();
        // 移除内存中user
        saveUserToRam.user = {};
        // 跳转到 login
        this.props.history.replace("/login");
      },

      onCancel() {},
    });
  };

  // 获取当前路径名称
  getTitle = (pathname) => {
    let title;
    menuList.forEach((menu) => {
      if (menu.path === pathname) {
        title = menu.title;
      } else if (menu.children) {
        menu.children.forEach((mcitem) => {
          if (mcitem.path === pathname) {
            title = mcitem.title;
          }
        });
      }
    });
    return title;
  };

  render() {
    const { username } = saveUserToRam.user;
    // 得到当前请求路基
    const { pathname } = this.props.location;
    const title = this.getTitle(pathname);
    return (
      <div className="header" style={{ padding: 0 }}>
        <div className="header-top">
          <span>欢迎,{username}</span>
          <button onClick={this.logout} className="link-button">
            退出
          </button>
        </div>
        <div className="header-bottom">
          <div className="header-bottom-left">{title}</div>
          <div className="header-bottom-right">
            <span>{this.state.sysTime}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
