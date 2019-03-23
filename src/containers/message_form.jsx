// external
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// internal
import { createMessage } from '../actions';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    // create a ref to store the DOM element
    this.messageInput = null;
    this.setMessageInputRef = (element) => {
      this.messageInput = element;
    };
  }

  componentDidMount() { this.messageInput.focus(); }

  handleChange({ target }) {
    const { value } = target;
    this.setState({ value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { channel, author, createMessage } = this.props;
    const { value } = this.state;
    createMessage(channel, author, value);
    this.setState({ value: '' });
  }


  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="channel-editor">
        <input
          type="text"
          value={value}
          className="form-control"
          autoComplete="off"
          onChange={this.handleChange}
          ref={this.setMessageInputRef}
        />
        <button type="submit">Send</button>
      </form>
    );
  }
}

// binds action to props, making it available
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createMessage },
    dispatch
  );
}

// maps redux state to props, making it available
function mapStateToProps(state) {
  return {
    author: state.currentUser,
    channel: state.selectedChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
