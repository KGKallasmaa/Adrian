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
      title:
        'Are you looking for a better way to manage your finances? Advisor Inc. can help you explore options for maintaining and growing your wealth.',
    },
    {
      title: 'Is it better to pay off debt or save money?',
      expanded: true,
      children: [
        {
          title:
            '“Pay yourself first,” was the advice from David Chilton’s bestselling book The Wealthy Barber. Building a financial cushion is important. ',
        },
        {
          title: 'Do you have extra money left at the end of the month? ',
        },
      ],
    },
    {
      title: 'Yes, a bit. ',
      expanded: true,
      children: [
        {
          title: 'The most important strategy here is to set financial goals—both for savings and debt-reduction.',
        },
        {
          title:
            'Once you have a goal, you quickly start to realize that every dollar saved gets you one step closer to that goal. ',
        },
      ],
    },
    {
      title: 'How do I set a debt reduction goal? ',
      expanded: true,
      children: [
        {
          title:
            'If you’re making the minimum payment on a credit card, see how many months it’ll take you to pay it off and how much interest you’ll pay during that time. ',
        },
        {
          title:
            'Once you see this number, you might be more motivated to pay this off faster so you can keep the money that would have gone toward interest fees. ',
        },
        { title: 'Paying off debt is good' },
      ],
    },
    {
      title: 'How do I calculate the right amount of debt to pay off each month?',
      expanded: true,
      children: [
        {
          title:
            'A financial security advisor can help you crunch numbers to ensure you make the right choice for you.',
        },
        {
          title:
            'The next available appointment with one of our advisors is tomorrow, March 9th 2020. Can I go ahead and schedule a 15-minute call? ?',
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
