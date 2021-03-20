/**
 * 1、将登陆的用户信息存储于localStorage
 * 2、获取localStorage中的信息
 * 3、移除localStorage中的信息
 */

// 采用store是为了更好的兼容性 marcuswestin/store(github)
// yarn add store
import store from "store";

// 定义常量key值
const USER_KEY = "chenc";

// 保存用户信息至localStorage
// return localStorage.setItem(USER_KEY, JSON.stringify(user));
export const saveUser = (user) => {
  return store.set(USER_KEY, user);
};

// 获取用户信息
// return JSON.parse(localStorage.getItem(USER_KEY) || "{}");
export const getUser = () => {
  return store.get(USER_KEY);
};

// 移除localStorage中用户信息
// localStorage.removeItem(USER_KEY);
export const removeUser = () => {
  store.remove(USER_KEY);
};
