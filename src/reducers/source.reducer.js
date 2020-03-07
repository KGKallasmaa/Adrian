const ACTIONS = {
  LOAD_SOURCE: 'LOAD_SOURCE'
}

const initialState = {
  parsed: null,
};

function SourceReducer (state = initialState, action) {

  const { type, payload } = action;

  switch (type) {
    case ACTIONS.LOAD_SOURCE:
      return { ...initialState, parsed: payload };

    default:
      return state;
  }
}

export default SourceReducer;
