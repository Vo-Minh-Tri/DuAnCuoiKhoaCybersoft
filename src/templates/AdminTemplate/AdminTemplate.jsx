import React from "react";
import { Route, Redirect } from "react-router";
import { NavLink } from "react-router-dom";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import "./adminTemplate.css";
import { USER_LOGIN } from "../../util/settings/config";
const { Header, Content, Footer, Sider } = Layout;

export default function AdminTemplate(props) {
  const { Component, ...restProps } = props;

  if (!localStorage.getItem(USER_LOGIN)) {
    alert("BẠN PHẢI ĐĂNG NHẬP MỚI ĐƯỢC VÀO TRANG NÀY");
    return <Redirect to="/" />;
  }

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <div className="flex ">
            <div className="basis-1/5 border-solid border-2 border-black bg-rose-400 ">
              <div className="py-5 px-3.5 text-right font-bold border-b-2 border-black">
                <span className="text-xl mr-3.5">Dashboard</span>
                <i className="fa-solid fa-bars text-lg"></i>
              </div>
              <div>
                <ul className="px-5 pt-7 ">
                  <li className="mb-5">
                    <NavLink
                      className="font-medium text-white hover:text-rose-700"
                      to={`/admin/user`}
                    >
                      Quản lý người dùng
                    </NavLink>
                  </li>
                  <li className="mb-5">
                    <NavLink className="font-medium text-white hover:text-rose-700" to=''>
                      Quản lý thông tin vị trí
                    </NavLink>
                  </li>
                  <li className="mb-5">
                    <NavLink className="font-medium text-white hover:text-rose-700" to="/admin">
                      Quản lý thông tin phòng
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="basis-4/5 border-solid border-2 border-black border-l-0 py-5">
              <div className="flex justify-end items-center border-b-2 border-black pb-4 pr-5">
                <span className="mr-2">Admin</span>
                <img
                  className="rounded-full text-center"
                  src="./img/user_pic-225x225.png"
                  alt="..."
                  width={30}
                />
                <div className="ml-2">
                  <button>
                    <i className="fa-solid fa-caret-down text-2xl"></i>
                  </button>
                </div>
              </div>
              <div>
                <Component {...propsRoute}></Component>
              </div>
            </div>
          </div>
        );
      }}
    ></Route>
    // <Route
    //   {...restProps}
    //   render={(propsRoute) => {
    //     return (
    //       <Layout>
    //         <Sider breakpoint="lg" collapsedWidth="0">
    //           <div className="logo" />
    //           <Menu
    //             theme="dark"
    //             mode="inline"
    //             defaultSelectedKeys={["2"]}
    //             items={[
    //               UserOutlined,
    //               VideoCameraOutlined,
    //               // UploadOutlined,
    //             ].map((icon, index) => ({
    //               key: String(index + 1),
    //               icon: React.createElement(icon),
    //               label: `nav ${index + 1}`,
    //             }))}
    //           />
    //         </Sider>
    //         <Layout>
    //           <Header
    //             className="site-layout-sub-header-background"
    //             style={{
    //               padding: 0,
    //             }}
    //           />
    //           <Content
    //             style={{
    //               margin: "24px 16px 0",
    //             }}
    //           >
    //             <div
    //               className="site-layout-background"
    //               style={{
    //                 padding: 24,
    //                 minHeight: 360,
    //               }}
    //             >
    //               <Component {...propsRoute} />
    //             </div>
    //           </Content>
    //           <Footer
    //             style={{
    //               textAlign: "center",
    //             }}
    //           >
    //             Ant Design ©2018 Created by Ant UED
    //           </Footer>
    //         </Layout>
    //       </Layout>
    //     );
    //   }}
    // ></Route>
  );
}
