import React from 'react';
import { Helmet } from 'react-helmet';
import Iframe from 'react-iframe';

export class Bot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Helmet title={'Welcome to Bot page'} />

        <Iframe
          url="https://chatbothackathon.s3.eu-west-2.amazonaws.com/index.html"
          width="100%"
          height="100%"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"
        />
      </React.Fragment>
    );
  }
}
