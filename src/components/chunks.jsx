import React from 'react';
import { connect } from 'react-redux';

import { selectChunks } from '../reducers/chunks.reducer';

const Chunks = ({ chunks }) => {
  return (
    <div>
      {chunks.map((item) => (
        <div>{item}</div>
      ))}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    chunks: selectChunks(state),
  };
}

const ChunksConnected = connect(mapStateToProps)(Chunks);

export default ChunksConnected;
