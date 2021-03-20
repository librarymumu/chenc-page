import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { saveUserToRam } from "./utils/memoryUtils";
import { getUser } from "./utils/storageUtils";
import App from "./App";

// 如果 local 中保存了 user, 将 user 保存到内存中
const user = getUser();
if (user && user.id) {
  saveUserToRam.user = user;
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
