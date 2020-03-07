import React from 'react';
import getFragmentFromSelection from 'draft-js/lib/getFragmentFromSelection';


export class AddToBacklogButton extends React.Component {

  addStar = () => {
    const { editorState } = this.props;

    const selectedText = getFragmentFromSelection(editorState);


    console.log(selectedText ? selectedText.map(x => x.getText()).join('\n') : '');
  };

  render() {
    return (
        <button onClick={this.addStar} type="button" className="btn btn-warning">
          Add to backlog
        </button>
    );
  }
}


export default AddToBacklogButton;
