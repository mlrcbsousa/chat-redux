// actions return a type:, payload: object
// when triggered they will go through every reducer of the app
// many keys :: many keys in the redux state

// redux expects action object from action trigger functions, fetch returns a promise object
// must add custom middleware to wait for promise resolve REDUX-PROMISE

// Middleware: function that takes an ACTION and does something before it reaches
// the reducer, eg. let pass, log, manipulate, etc

export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const CREATE_MESSAGE = 'CREATE_MESSAGE';
export const SELECT_CHANNEL = 'SELECT_CHANNEL';

const url = "https://wagon-chat.herokuapp.com/";

const fetch_messages = (channel) => {
  return fetch(`${url}${channel}/messages`).then(response => response.json());
};

export function fetchMessages(channel) {
  const promise = fetch_messages(channel).then(data => data.messages);
  return {
    type: FETCH_MESSAGES,
    payload: promise // made possible only because of middleware
  };
}

export function createMessage(channel, author, content) {
  const promise = fetch(`${url}${channel}/messages`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ author, content })
  }).then(response => response.json()).then(data => data);

  return {
    type: CREATE_MESSAGE,
    payload: promise // made possible only because of middleware
  };
}

export function selectChannel(channel) {
  const promise = fetch_messages(channel).then(data => data);
  return {
    type: SELECT_CHANNEL,
    payload: promise // made possible only because of middleware
  };
}
