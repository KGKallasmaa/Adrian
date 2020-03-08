import React from 'react';
import { connect } from 'react-redux';

import Iframe from 'react-iframe';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { addChunkToList } from '../../reducers/chunks.reducer';

class ControlledEditor extends React.Component {
  constructor(props) {
    super(props);
  }

  handleCopy = async () => {
    const iframe = document.getElementById('embedDocumentId');
    const txt = await this.getIframeSelectionText(iframe);
    this.props.addChunkToList({ title: txt, expand: true });
  };

  getIframeSelectionText = (iframe) => {
    let win = iframe.contentWindow || iframe.contentDocument.defaultView;
    let doc = iframe.contentDocument || win.document || iframe.contentWindow.document;
    if (win.getSelection) {
      return win.getSelection().toString();
    } else if (doc.selection && doc.selection.createRange) {
      return doc.selection.createRange().text;
    } else if (doc.selection) {
      return doc.selection.createRange().text;
    } else {
      alert('Error in rendering');
    }
  };

  render = () => {
    return (
      <React.Fragment>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon3">
              Website URL
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
            value={'https://www.freedom55financial.com/advice/managing-your-money/pay-off-debt-or-save-money.html'}
          />
        </div>
        <button className={'btn btn-primary'} onClick={this.handleCopy} style={{ margin: 10 }}>
          Add To Bot
        </button>
        <div style={{ border: '2px solid #d2d2d2', background: '#fff' }}>
          <Iframe
            url="/ff55/index.htm"
            width="100%"
            height="550px"
            id="embedDocumentId"
            className="myClassname"
            display="initial"
            position="relative"
          />
        </div>
      </React.Fragment>
    );
  };
}

const ConnectedEditor = connect(null, { addChunkToList })(ControlledEditor);

export default ConnectedEditor;
