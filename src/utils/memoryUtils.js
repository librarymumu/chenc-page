/**
 * 用于从内存中获取用户数据的工具对象
 */

// 解决 Assign object to a variable before exporting as module default
// 方案一： 追加 /* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
// export default {
//   user: {}, // 内存中保存登陆的 user 信息对象
// };

// 方案二：分别暴露
export const saveUserToRam = {
  user: {},
};
