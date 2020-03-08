import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectChunks } from '../../reducers/chunks.reducer';

import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css';

class MasterChunk extends Component {
  constructor(props) {
    super(props);
    if (props.data) {
      this.state = {
        treeData: props.data,
      };
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  componentWillReceiveProps(nextProps, nextContext) {
    this.setState({
      treeData: nextProps.data,
    });
  }

  render() {
    return (
      <div style={{ height: 550 }}>
        <SortableTree
          treeData={this.state.treeData}
          onChange={(treeData) => this.setState({ treeData })}
          shouldCopyOnOutsideDrop={true}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: selectChunks(state),
  };
}

const ConnectedChunk = connect(mapStateToProps)(MasterChunk);

export default ConnectedChunk;
