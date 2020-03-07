import React from 'react';

import { EditorState, convertFromHTML, ContentState } from 'draft-js';
import {Editor } from 'react-draft-wysiwyg';
import { AddToBacklogButton } from "../../components/editor/AddTobacklogButton.js"
import DraftPasteProcessor from 'draft-js/lib/DraftPasteProcessor';

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
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={this.onEditorStateChange}
        toolbarCustomButtons={[<AddToBacklogButton />]}
        toolbar={{options: []}}
      />
    )
  }
}

export default ControlledEditor;



