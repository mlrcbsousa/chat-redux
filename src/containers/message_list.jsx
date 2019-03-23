// external
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// internal
import { fetchMessages } from '../actions';
import Message from '../components/message';
import MessageForm from '../containers/message_form';

class MessageList extends Component {
  constructor(props) {
    super(props);
    // create a ref to store the DOM element
    this.messageList = null;
    this.setMessageListRef = (element) => {
      this.messageList = element;
    };
  }

  componentWillMount() {
    // dispatch an action to update the Redux State tree (messages)
    const { selectedChannel, fetchMessages } = this.props;
    fetchMessages(selectedChannel);
    // setInterval(() => fetchMessages(selectedChannel), 5000);
  }

  componentDidUpdate() {
    const element = this.messageList;
    element.scrollTop = element.scrollHeight;
  }

  componentWillUnmount() {
    clearInterval();
  }

  render() {
    const { messages } = this.props;

    return (
      <div className="message-list col-sm-8" ref={this.setMessageListRef}>
        {messages.map(message => <Message key={message.created_at} message={message} />)}
        <MessageForm />
      </div>
    );
  }
}

// binds action to props, making it available
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMessages },
    dispatch
  );
}

// maps state to props, making it available
function mapStateToProps(state) {
  return {
    selectedChannel: state.selectedChannel,
    messages: state.messages
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
