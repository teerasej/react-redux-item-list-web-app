import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-router-modal/css/react-router-modal.css';
import HeaderBar from './components/HeaderBar';
import { Layout, Row, Col, Button, Divider } from 'antd';
import ItemList from './components/list-item/ItemList';

import {
  BrowserRouter as Router,
  Switch,
  Link
} from "react-router-dom";
import { ModalContainer,ModalRoute } from 'react-router-modal';

const { Header, Content, Footer } = Layout;

class App extends React.Component {
  render() {
    return (
      <Router>
      <div>
        <Layout className="layout">
          <HeaderBar />
          <Content style={{
            padding: '0 50px'
          }}>
            <div
              style={{
                background: '#fff',
                padding: 24,
                minHeight: 280
              }}>

              <Row gutter={16}>
                <Col span={20}></Col>
                <Col span={4}>
                  <Link to="/add-new-item">
                    <Button type="primary" size="large" block>Add Item</Button>
                  </Link>
                </Col>
              </Row>
              <Divider/>
              <Row gutter={16}>
                <Col span={24}><ItemList /></Col>
              </Row>

            </div>
          </Content>
          <Footer style={{
            textAlign: 'center'
          }}>React Redux Workshop ©2012-2021 Created by Nextflow.in.th</Footer>
        </Layout>
        <Switch>
          <ModalRoute path='/add-new-item' parentPath='/' >
            Hello
          </ModalRoute>
        </Switch>
        <ModalContainer />
      </div>
      </Router>
    );
  }
}

export default App;