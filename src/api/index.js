/**
 * 包含每个接口的请求模块函数
 * 每个函数返回值都是promise对象
 */
import ajax from "./ajax";

// 登录
export const reqLogin = (username, password) =>
  ajax("/login", { username, password }, "POST");
