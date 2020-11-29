import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderBar from './components/HeaderBar';
import {Layout, Menu} from 'antd';
import ItemList from './components/list-item/ItemList';
const {Header, Content, Footer} = Layout;

class App extends React.Component {
  render() {
    return (
    <div>
      <Layout className="layout">
        <HeaderBar/>
        <Content style={{
          padding: '0 50px'
        }}>
          <div
            style={{
            background: '#fff',
            padding: 24,
            minHeight: 280
          }}>
            <ItemList/>
          </div>
        </Content>
        <Footer style={{
          textAlign: 'center'
        }}>React Redux Workshop ©2012-2021 Created by Nextflow.in.th</Footer>
      </Layout>,
    </div>
    );
  }
}

export default App;