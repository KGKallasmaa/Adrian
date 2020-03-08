import React from 'react';
import { connect } from 'react-redux';

import { addChunkToList } from '../../reducers/chunks.reducer';

import './AddTobacklogButton.css';

import getFragmentFromSelection from 'draft-js/lib/getFragmentFromSelection';

// actions

class AddToBacklogButtonClass extends React.Component {
  addChunk = () => {
    const { editorState, addChunkToList } = this.props;

    const selectedText = getFragmentFromSelection(editorState);

    if (selectedText) {
      const text = selectedText.map((x) => x.getText()).join('\n');
      addChunkToList(text);
    }
  };

  render() {
    return (
      <button className={'btn btn-primary'} onClick={this.addChunk}>
        Add To Log
      </button>
    );
  }
}

export const AddTobacklogButton = connect(null, { addChunkToList })(AddToBacklogButtonClass);
