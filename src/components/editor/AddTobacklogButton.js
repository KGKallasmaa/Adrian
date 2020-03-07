import React  from 'react';
import { Editor } from 'react-draft-wysiwyg';
import getFragmentFromSelection from 'draft-js/lib/getFragmentFromSelection';


export class AddToBacklogButton extends React.Component {

  addStar = () => {
    const { editorState } = this.props;

    const selectedText = getFragmentFromSelection(editorState);


    console.log(selectedText ? selectedText.map(x => x.getText()).join('\n') : '')
  };

  render() {
    return (
      <button onClick={this.addStar}>Add To Log</button>
    );
  }
}

export default AddToBacklogButton;
