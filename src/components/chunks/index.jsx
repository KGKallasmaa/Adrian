import React, { Component } from 'react';
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css'; // This only needs to be imported once in your app

export default class MasterChunk extends Component {
  constructor(props) {
    super(props);

    this.state = {
      treeData: [
        { title: 'Title one', children: [{ title: 'sub 1' }] },
        { title: 'Title two', children: [{ title: 'sub 2' }] },
      ],
    };
    navigator.clipboard.readText().then((text) => {
      alert(text);
    });
  }

  render() {
    return (
      <div style={{ height: 400 }}>
        <SortableTree treeData={this.state.treeData} onChange={(treeData) => this.setState({ treeData })} />
      </div>
    );
  }
}
