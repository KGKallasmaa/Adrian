import React from 'react';
import { connect } from 'react-redux'

import { EditorState, convertFromHTML, ContentState } from 'draft-js';
import {Editor } from 'react-draft-wysiwyg';
import { AddToBacklogButton } from "../../components/editor/AddTobacklogButton.js"
import Iframe from 'react-iframe';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import UploadPDFButton from './UploadPDFButton';
import {addChunkToList} from '../../reducers/chunks.reducer'


class ControlledEditor extends React.Component {
  constructor(props) {
    super(props);

    let editorState;

    if (props.content) {
      // const blocksFromHTML = convertFromHTML(props.content);
      editorState = EditorState.createWithContent(ContentState.createFromText('Hello'));
    }
    else {
      editorState = EditorState.createEmpty();
    }

    this.state = { editorState };
  }


  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  handleCopy = async () => {
    const iframe = document.getElementById("embedDocumentId");
    const txt = await this.getIframeSelectionText(iframe);
    this.props.addChunkToList({title: txt, expand: true});
  };

  getIframeSelectionText = (iframe) => {
    var win= iframe.contentWindow || iframe.contentDocument.defaultView;
    var doc= iframe.contentDocument || win.document || iframe.contentWindow.document;
    if (win.getSelection) {
      return win.getSelection().toString();
    }
    else if (doc.selection && doc.selection.createRange) {
      return doc.selection.createRange().text;
    }
    else if (doc.selection) {
      return doc.selection.createRange().text;
    }
    else
    {
      alert('Error in rendering');
    }
  };

  render = () => {
    const { editorState } = this.state;
    return (
      <React.Fragment>
        {/*<Editor*/}
          {/*editorState={editorState}*/}
          {/*wrapperClassName="demo-wrapper"*/}
          {/*editorClassName="demo-editor"*/}
          {/*onEditorStateChange={this.onEditorStateChange}*/}
          {/*toolbarCustomButtons={[<AddToBacklogButton/>,<UploadPDFButton/>]}*/}
          {/*toolbar={{options: []}}*/}
        {/*/>*/}
        {/*<button onClick={this.handleCopy} >Copy</button>*/}
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon3">Website URL</span>
          </div>
          <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" value={"https://www.moneyadviceservice.org.uk/en/articles/cash-isas"} />
        </div>
        <button className={'btn btn-primary'} onClick={this.handleCopy} style={{margin: 10}}>Add To Bot</button>
        {/*<hr />*/}
        <div style={{border: '2px solid #d2d2d2', background: '#fff'}}>
        <Iframe url="/uk/index.htm"
                width="100%"
                height="550px"
                id="embedDocumentId"
                className="myClassname"
                display="initial"

                position="relative"/>
        </div>
      </React.Fragment>
    )
  }
}


const ConnectedEditor = connect(
  null,
  {addChunkToList}
)(ControlledEditor);


export default ConnectedEditor;



