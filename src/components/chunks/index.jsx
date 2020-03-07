import React, { Component } from 'react';
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css';

export default class MasterChunk extends Component {
  constructor(props) {
    super(props);

    if (props.data) {
      this.state = {
        treeData: props.data,
      };
    } else {
      this.state = {
        treeData: [
          { title: 'QQQQQQQQQQASDASDA', children: [{ title: 'fake sub 1' }, { title: 'fake sub 2' }] },
          { title: 'fQQQQQQSFAHSFOASHIOHASIOD', children: [{ title: 'fake sub 3' }] },
        ],
      };
      /*
      ALREADY HAVE
​


[An innovative finance ISA (IFISA) lets you use your tax free ISA allowance while investing in peer to peer (P2P) lending.

[The Lifetime ISA is a longer-term tax-free savings account that will let you save up to £4,000 per year and get a government bonus of 25% (up to £1,000).]

You pay no Income Tax on the interest or dividends you receive from an ISA and any profits from investments are free of Capital Gains Tax.
       */
    }

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    console.log(e);
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
      <div style={{ height: 400 }}>
        <SortableTree
          treeData={this.state.treeData}
          onChange={(treeData) => this.setState({ treeData })}
          shouldCopyOnOutsideDrop={true}
        />
      </div>
    );
  }
}
