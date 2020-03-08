import React from 'react';
import './main.css';
import AdrianEditor from '../../components/editor/index.jsx';
import MasterChunk from '../../components/chunks/index.jsx';
import 'antd/dist/antd.css';

import { Button, Layout, Menu } from 'antd';
import { Helmet } from 'react-helmet';

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
const { Header, Content, Footer } = Layout;

export class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      treeData: null,
      loading: false,
    };
    this.fixStuff = this.fixStuff.bind(this);
    this.goToBotBuilder = this.goToBotBuilder.bind(this);
  }
  fixStuff(e) {
    e.preventDefault();
    const new_data = [
      { title: 'Please let me be', children: [{ title: 'fake sub 1' }, { title: 'fake sub 2' }] },
      { title: 'part of Superangel    :)', children: [{ title: 'fake sub 3' }] },
    ];
    this.setState({
      treeData: new_data,
    });
  }
  async goToBotBuilder(e) {
    e.preventDefault();
    this.setState({
      loading: true,
    });
    await sleep(3000);
    window.location.href = 'https://chatbothackathon.s3.eu-west-2.amazonaws.com/index.html';
  }

  render() {
    const { treeData } = this.state;
    return (
      <React.Fragment>
        <br />
        <Helmet title={'Bot builder page'} />
        <Layout>
          <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ lineHeight: '64px' }}></Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
              <Content style={{ padding: '0 24px', minHeight: 280 }}>
                <div className="container-fluid">
                  <div className="row"></div>
                  <div className="row">
                    <div className="col-md-6" style={{ borderRight: '4px solid #001529', paddingRight: 36 }}>
                      <h3>Source Material</h3>
                      <div className="row">
                        <div className="col-md-12">
                          <AdrianEditor />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h3>Bot Builder</h3>
                      <div className="row">
                        <div className="col-md-12">
                          <MasterChunk realdata={treeData} />
                        </div>
                      </div>
                      <div className="row" style={{ marginTop: 50 }}>
                        <div className="col-md-6">
                          <Button
                            style={{ 'background-color': '#FDC000', color: 'black', 'border-color': '#FDC000' }}
                            className="btn btn-success btn-block"
                            onClick={this.fixStuff}
                          >
                            Persuadr™ Check
                          </Button>
                        </div>
                        <div className="col-md-6">
                          <Button
                            type="primary"
                            style={{ 'background-color': '#31D287', 'border-color': '#31D287' }}
                            className="btn btn-success btn-block"
                            loading={this.state.loading}
                            onClick={this.goToBotBuilder}
                          >
                            Build my Bot
                          </Button>
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
  }
}
