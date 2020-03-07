import React from 'react';
import './main.css';
import AdrianEditor from '../../components/editor';
import MasterChunk from '../../components/chunks';
import 'antd/dist/antd.css';

import { Layout, Menu } from 'antd';


const { Header, Content, Footer} = Layout;


export const MainPage = () => {
  return (
    <React.Fragment>
      <br/>
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <div className="container-fluid">
                <div className="row">
                </div>
                <div className="row">
                  <div className="col-md-6" style={{borderColor:"red",borderStyle:"solid"}}>
                    <h3>Source</h3>
                    <div className="row">
                      <div className="col-md-12">
                        <AdrianEditor/>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h3>Chunks</h3>
                    <div className="row">
                      <div className="col-md-12">
                        <MasterChunk/>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <button type="button" className="btn btn-warning btn-block">
                          Test
                        </button>
                      </div>
                      <div className="col-md-6">
                        <button type="button" className="btn btn-success btn-block">
                          Build my Bot
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Adrian Bot ©2020 </Footer>
      </Layout>
    </React.Fragment>
  );
};
