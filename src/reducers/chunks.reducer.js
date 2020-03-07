const CHUNK_ACTIONS = {
  ADD_TO_LIST: 'ADD_TO_LIST'
};

const initialState = {
  list: [],
};

function ChunksReducer (state = initialState, action) {

  const { type, payload } = action;

  switch (type) {
    case CHUNK_ACTIONS.ADD_TO_LIST:
      return { ...initialState, list: [...state.list, payload] };

    default:
      return state;
  }
}



// actions
export const addChunkToList = (text) => async (dispatch) => {
    dispatch({
      type: CHUNK_ACTIONS.ADD_TO_LIST,
      payload: text
    });
};

export function selectChunks (state) {
  return state.chunks.list;
}


export default ChunksReducer;
