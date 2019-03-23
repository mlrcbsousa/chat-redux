// external
import React from 'react';

// internal
import MessageList from '../containers/message_list';
import ChannelList from '../containers/channel_list';

const App = () => {
  const src = "https://raw.githubusercontent.com/lewagon/chat-redux/master/assets/images/logo.svg";

  return (
    <div className="messaging-wrapper">
      <div className="logo-container">
        <img className="messaging-logo" src={src} alt="logo" />
      </div>
      <ChannelList />
      <MessageList />
    </div>
  );
};

export default App;
