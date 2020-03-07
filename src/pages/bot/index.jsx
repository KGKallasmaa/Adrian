import React from 'react';
import { Helmet } from 'react-helmet';

export class Bot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Welcome to Bot page</title>
        </Helmet>
        Bot page
      </React.Fragment>
    );
  }
}
