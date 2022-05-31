import logo from "./logo.svg";
import "./App.css";
import { Router, Switch } from "react-router";
import { createBrowserHistory } from "history";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate exact path="/" Component={Home}></HomeTemplate>
        <HomeTemplate exact path="/detail" Component={Detail}></HomeTemplate>
      </Switch>
    </Router>
  );
}

export default App;
