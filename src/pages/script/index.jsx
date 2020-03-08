import React from 'react';
import { Helmet } from 'react-helmet';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Button } from 'antd';

export class Script extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.goToDemo = this.goToDemo.bind(this);
  }
  goToDemo() {
    window.location.href = 'https://chatbothackathon.s3.eu-west-2.amazonaws.com/index.html';
  }

  render() {
    const name = this.state.name;
    const codeString =
      '<!-- Adrian bot code -->\n' +
      '    <script async src="https://api.adian.com/bot/?id=SUPER_ANGEL"></script>\n' +
      '    <script>\n' +
      '        window.dataLayer = window.dataLayer || [];\n' +
      '        function gtag(){dataLayer.push(arguments);}\n' +
      "        gtag('js', new Date());\n" +
      "        gtag('config', 'SUPER_ANGEL');\n" +
      '    </script>';
    return (
      <React.Fragment>
        <Helmet title={'Copy the code'} />
        <br />
        <br />
        <br />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h3>Copy the code</h3>
              <br />
              <span>
                <SyntaxHighlighter language="javascript" style={docco}>
                  {codeString}
                </SyntaxHighlighter>
              </span>
              <p>If you have any problems, send us an email.</p>
              <br />

              <Button
                key="submit"
                type="primary"
                style={{ 'background-color': '#31D287', 'border-color': '#31D287' }}
                onClick={this.goToDemo}
              >
                View the demo
              </Button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
