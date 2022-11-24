import {createStore} from 'react-redux';

function reducer(currentState, action) {
    if (currentState === undefined) {
      return {
        number: 1,
      };
    }
    const newState = { ...currentState };
    if (action.type === 'PLUS') {
      newState.number++;
      alert("북마크 됨")
    }
    return newState;
  }
  
