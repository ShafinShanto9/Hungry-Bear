import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  UserOutlined,
  SnippetsOutlined,
  UnorderedListOutlined,
  LoginOutlined,
  ShoppingCartOutlined,
  SearchOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import '../resources/layout.css'
import ProfileCard from './ProfileCard';
const { Header, Sider, Content } = Layout;

const DefaultLayout = ({children}) => {
  const [collapsed, setCollapsed] = useState(false);
  const { cartItems, loading } = useSelector(state => state.rootReducer)
  const navigate = useNavigate()

  useEffect(() => {
    localStorage.setItem('cartItems',JSON.stringify(cartItems))
  }, [cartItems])
  
  return (
    <Layout>
      {loading && (
        <div className="spinner">
          <div class="spinner-border" role="status">
          </div>  
        </div>
      )}
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
          <Menu.Item key='/item' icon={<UnorderedListOutlined />}>
            <Link to='/item'>Items</Link>
          </Menu.Item>
          <Menu.Item key='/customer' icon={<UserOutlined/>}>
            <Link to='/customer'>Customer</Link>
          </Menu.Item>
          <Menu.Item key='5' icon={<LoginOutlined />}>
            Logout
          </Menu.Item>

        </Menu>
        <div>
          <ProfileCard/>
        </div>
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

            <div class="input-group ml-3 w-50">
              <input type="text" class="form-control" placeholder=" Search your product" aria-label="product name" aria-describedby="button-addon2" >
            </input>
             <button className='btn search-btn-styling'><SearchOutlined /></button>
            </div>  
                   
          <div
            onClick={()=>{navigate('/cart')}}
            className='cart-count d-flex align-items-center font-weight-bold mr-2 
            '>
              <ShoppingCartOutlined />
              <p className=''>{cartItems.length}</p>
            </div>
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