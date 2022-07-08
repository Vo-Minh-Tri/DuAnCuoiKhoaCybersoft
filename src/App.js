import "./App.css";
import { Router, Switch } from "react-router";
import { Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import "antd/dist/antd.css";
import Booking from "./pages/Booking/Booking";
import Login from "./pages/Login/Login";
import BookingTemplate from "./templates/BookingTemplate/BookingTemplate";
import UserTemplate from "./templates/UserTemplate/UserTemplate";
import Register from "./pages/Register/Register";
import DateRangePicker from "./components/Detail_Component/DateRangePicker";
import AddNewRoom from "./pages/Admin/ManagerRooms/AddNewRoom/AddNewRoom";
import Profile from "./pages/Profile/Profile";
import AdminTemplateNew from "./templates/AdminTemplate/AdminTemplateNew";
import EditRoom from "./pages/Admin/ManagerRooms/EditRoom/EditRoom";
import ManagerRooms from "./pages/Admin/ManagerRooms/ManagerRooms";

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate exact path="/" Component={Home}></HomeTemplate>
        <HomeTemplate exact path="/home" Component={Home}></HomeTemplate>
        <HomeTemplate
          exact
          path="/detail/:id"
          Component={Detail}
        ></HomeTemplate>

        <Route exact path="/register" component={Register} />
        <Route exact path="/date" component={DateRangePicker} />

        <AdminTemplateNew exact path="/admin" Component={ManagerRooms} />
        <AdminTemplateNew exact path="/admin/rooms" Component={ManagerRooms} />
        <AdminTemplateNew exact path="/admin/user" Component={ManagerRooms} />
        <AdminTemplateNew
          exact
          path="/admin/rooms/addnew"
          Component={AddNewRoom}
        />
        <AdminTemplateNew exact path="/admin/rooms/edit/:id" Component={EditRoom} />

        <UserTemplate exact path="/login" Component={Login} />
        <UserTemplate exact path="/register" Component={Register} />
        <UserTemplate exact path="/profile" Component={Profile} />

        <BookingTemplate path="/booking/:id" Component={Booking} />
      </Switch>
    </Router>
  );
}

export default App;
