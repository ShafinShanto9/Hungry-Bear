import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  UserOutlined,
  SnippetsOutlined,
  UnorderedListOutlined,
  LoginOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import '../resources/layout.css'
const { Header, Sider, Content } = Layout;

const DefaultLayout = ({children}) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" >
          <img src="https://i.ibb.co/dpng4c6/bear-logo.png" alt="" srcset="" />
          <h3>HUNGRY BEAR </h3>
        </div>
        <Menu
          theme='dark'
          mode="inline"
          defaultSelectedKeys={window.location.pathname}
        >
          <Menu.Item key='/home' icon={<HomeOutlined />}>
            <Link to='/home'> Home </Link>
          </Menu.Item>
          <Menu.Item key='/bills' icon={<SnippetsOutlined />}>
            <Link to='/bills'>Bills</Link>
          </Menu.Item>
          <Menu.Item key='/items' icon={<UnorderedListOutlined />}>
            <Link to='/items'>Items</Link>
          </Menu.Item>
          <Menu.Item key='/customer' icon={<UserOutlined/>}>
            <Link to='/customer'>Customer</Link>
          </Menu.Item>
          <Menu.Item key='5' icon={<LoginOutlined />}>
            Logout
          </Menu.Item>

        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 10,
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '10px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout