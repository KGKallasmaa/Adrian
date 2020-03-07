import React from 'react';

import { EditorState, convertFromHTML, ContentState } from 'draft-js';
import {Editor } from 'react-draft-wysiwyg';
import { AddToBacklogButton } from "../../components/editor/AddTobacklogButton.js"
import Iframe from 'react-iframe';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


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

  render() {
    const { editorState } = this.state;
    return (
      <React.Fragment>
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={this.onEditorStateChange}
        toolbarCustomButtons={[<AddToBacklogButton/>]}
        toolbar={{options: []}}
      />
        <Iframe url="https://medium.com/@jeffreypbezos/no-thank-you-mr-pecker-146e3922310f"
                width="100%"
                height="450px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"/>


      </React.Fragment>
    )
  }
}

export default ControlledEditor;



