// /**
//  * 保存菜单信息
//  */

const menuList = [
  {
    title: "首页", // 菜单标题名称
    key: "1",
    path: "/home", // 对应的 path
    icon: "HomeOutlined", // 图标名称
  },
  {
    title: "商品管理",
    key: "sub1",
    icon: "AppstoreAddOutlined",
    children: [
      // 子菜单列表
      {
        title: "分类管理",
        key: "2",
        path: "/category",
        icon: "ShoppingOutlined",
      },
    ],
  },
  {
    title: "系统设置",
    key: "sub2",
    icon: "SettingOutlined",
    children: [
      // 子菜单列表
      {
        title: "系统用户",
        key: "3",
        path: "/user",
        icon: "TeamOutlined",
      },
    ],
  },
];

export default menuList;
