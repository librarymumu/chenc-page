import { Route, Switch } from "react-router-dom";
import Admin from "./pages/admin";
import Login from "./pages/login";
import "./App.less";

function App() {
  return (
    <Switch>
      <Route path="/login" component={Login}></Route>
      <Route path="/" component={Admin}></Route>
    </Switch>
  );
}

export default App;
