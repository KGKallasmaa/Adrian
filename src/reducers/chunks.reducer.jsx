const CHUNK_ACTIONS = {
  ADD_TO_LIST: 'ADD_TO_LIST',
};

const initialState = {
  list: [
    {
      title:
        'Hi! I’m Adrian, I’m the Virtual Assistant connecting you to money management insights from Advisor Inc. 24/7! How can I help?',
    },
    {
      title: 'I want to build up my savings',
      expanded: true,
      children: [
        { title: 'Work out how much you can afford to save and find out how to set and reach your savings goal.' },
        {
          title:
            'If you save regularly, you’ll quickly find that your savings add up and keep growing. Get into the habit and watch your money turn into more money.',
        },
      ],
    },
    {
      title: 'What’s the best way to do that?',
      expanded: true,
      children: [
        {
          title:
            'If you save regularly, you’ll quickly find that your savings add up and keep growing. Get into the habit and watch your money turn into more money.',
        },
        {
          title:
            'The easiest way to get your savings working for you is to set things up so that you automatically add a little bit each month to your savings.',
        },
        {
          title:
            'Before you know it, you’ll have built up a solid chunk of savings for example, one way of saving tax-efficiently is through a Cash ISA.',
        },
      ],
    },
    {
      title: 'What’s the benefit of a Cash ISA?',
      expanded: true,
      children: [{ title: 'With a Cash ISA you’ll earn tax-free interest on your savings.' }],
    },
    {
      title: 'The interest rates seem low, is an ISA worth it?',
      expanded: true,
      children: [
        {
          title:
            'You pay no Income Tax on the interest you receive from an ISA and any profits from investments are free of Capital Gains Tax.',
        },
        // {title: 'Not all Cash ISAs offer great interest rates. Shop around until you find a good deal.'},
        {
          title:
            'To figure out the best savings vehicle for you, we’ll need to find out more about you. The next available appointment is tomorrow, March 8th 2020. Can I go ahead and schedule a 15-minute call?',
        },
      ],
    },
  ],
};

function ChunksReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CHUNK_ACTIONS.ADD_TO_LIST:
      console.log('payload', payload);
      return { ...initialState, list: [...state.list, payload] };

    default:
      return state;
  }
}

// actions
export const addChunkToList = (text) => async (dispatch) => {
  dispatch({
    type: CHUNK_ACTIONS.ADD_TO_LIST,
    payload: text,
  });
};

export function selectChunks(state) {
  return state.chunks.list;
}

export default ChunksReducer;
