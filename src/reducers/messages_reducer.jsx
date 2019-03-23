import {
  FETCH_MESSAGES,
  CREATE_MESSAGE,
  SELECT_CHANNEL
} from '../actions';

// function that receives an action and the current state
export default function(state = null, action) {
  switch (action.type) {
    case FETCH_MESSAGES:
      return action.payload;
    case CREATE_MESSAGE: {
      // add message from post response to message array
      const newMessages = state.slice(0);
      // slice(0) technique changes array without changing contents
      // because push won't change it
      newMessages.push(action.payload);
      // MessageList.render();
      return newMessages;
    }
    case SELECT_CHANNEL:
      return action.payload.messages;
    default:
      return state;
  }
}

// the goal is to compute and return the new state
// version of the state for which the reducer is responsible for
// always needs to return something
// when it is nothing to be concerned with, return same state
