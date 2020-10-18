import React from "react";
import { Link } from "@reach/router";
import { Layout, Menu } from "antd";
import { Router } from "@reach/router";
import Home from "./Home";
import Booking from "./Booking";

const { Header, Content } = Layout;

export default function Navigation() {
  return (
    <>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">
              <Link to="/">T Travel</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="booking">Rezervasyon</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content>
          <div className="site-layout-content">
            <Router>
              <Home path="/" />
              <Booking path="booking" />
            </Router>
          </div>
        </Content>
      </Layout>
    </>
  );
}
