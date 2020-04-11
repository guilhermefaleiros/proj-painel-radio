const INITIAL_STATE = [
  {
    id: 1,
    read: false,
    author: 'Braia',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla porttitor massa id neque. Suspendisse potenti nullam ac tortor vitae purus faucibus.',
    date: '- às 16h00 - 09/04/2020'
  },
  {
    id: 2,
    read: false,
    author: 'Jonas',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla porttitor massa id neque. Suspendisse potenti nullam ac tortor vitae purus faucibus.',
    date: '- às 16h00 - 09/04/2020'
  },
  {
    id: 3,
    read: true,
    author: 'Braia',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla porttitor massa id neque. Suspendisse potenti nullam ac tortor vitae purus faucibus.',
    date: '- às 16h00 - 09/04/2020'
  },
  {
    id: 4,
    read: true,
    author: 'Opa',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla porttitor massa id neque. Suspendisse potenti nullam ac tortor vitae purus faucibus.',
    date: '- às 16h00 - 09/04/2020'
  },
  {
    id: 5,
    read: false,
    author: 'Opa',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla porttitor massa id neque. Suspendisse potenti nullam ac tortor vitae purus faucibus.',
    date: '- às 16h00 - 09/04/2020'
  },
]

export default function cart(state = INITIAL_STATE, action){
  switch(action.type){
    case 'LIST_ALL_ORDERS':
      return state;
    case 'REMOVE_ORDER':
      let newState = state.filter(item => item.id !== action.payload.id);
      return newState;
    case 'SET_ORDER_READ':
      let newStateRead = state.map(item => {
        if(item.id === action.payload.id){
          item.read = true;
          return item;
        }
        return item;
      })
      return newStateRead;
    default:
      return state;
  }
}