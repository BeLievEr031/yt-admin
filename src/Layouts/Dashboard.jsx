import { useState } from "react";
import {
  LineChartOutlined,
  PlayCircleOutlined,
  AppstoreOutlined,
  CommentOutlined,
  TeamOutlined,
  VideoCameraOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Breadcrumb, Flex, Layout, Menu, theme } from "antd";
import { Outlet } from "react-router-dom";
import Logo from "../components/Logo";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Dashboard", "1", <AppstoreOutlined style={{ fontSize: "20px" }} />),
  getItem("Content", "2", <PlayCircleOutlined style={{ fontSize: "20px" }} />),
  getItem("Analytics", "3", <LineChartOutlined style={{ fontSize: "20px" }} />),
  getItem("Comment", "4", <CommentOutlined style={{ fontSize: "20px" }} />),
  getItem("Users", "5", <TeamOutlined style={{ fontSize: "20px" }} />),
  getItem(
    "Channels",
    "6",
    <VideoCameraOutlined style={{ fontSize: "20px" }} />
  ),
];

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Logo collapsed={collapsed} />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Flex
            justify="right"
            align="center"
            style={{ height: "100%", paddingRight: "10px" }}
          >
            <Avatar size={45} icon={<UserOutlined />} />
          </Flex>
        </Header>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
