import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  AppstoreOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import "./adminLayout.css";
const { Header, Sider, Content } = Layout;

export default function AdminLayout(props) {
  const { Component, propsRoute } = props;
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sider theme="light" collapsible collapsed={collapsed}>
        <div className="py-3" style={{ color: "#ff385c" }}>
          <div className="flex items-center justify-center">
            <i className="fab fa-airbnb mr-2 text-4xl"></i>
            <p className="text-2xl font-bold">airbnb</p>
          </div>
        </div>
        <Menu
          style={{ maginTop: 0 }}
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <AppstoreOutlined />,
              label: "Room list",
            },
            {
              key: "2",
              icon: <ShopOutlined />,
              label: "nav 2",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "nav 3",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        ></Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Component {...propsRoute} />
        </Content>
      </Layout>
    </Layout>
  );
}
