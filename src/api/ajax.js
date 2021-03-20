/**
 * 自定义一个promise对象，请求正常时调用resolve
 * 不正常时，直接提示，这样所有的请求都不用考虑请求出错的问题
 */
import axios from "axios";
import { message } from "antd";

/**
 * 发送异步Ajax请求函数模块
 * 封装axios库
 * @param {*} url - 请求地址
 * @param {*} data  - 请求参数
 * @param {*} type - 请求类型 GET POST
 * @returns promise对象
 */
export default function ajax(url, data = {}, type = "GET") {
  return new Promise((resolve, reject) => {
    let promise;
    if (type === "GET") {
      promise = axios.get(url, {
        params: data,
      });
    } else {
      promise = axios.post(url, data);
    }

    promise
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        message.error("服务器忙，请稍后再试！！！");
      });
  });
}
