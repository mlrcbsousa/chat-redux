// external
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// internal
import { selectChannel } from '../actions';

class ChannelList extends Component {
  componentWillMount() {
    // dispatch an action to update the Redux State tree
    const { selectChannel } = this.props;
    selectChannel('general');
  }

  render() {
    const { channels, selectedChannel, selectChannel } = this.props;

    return (
      <div className="channels-container">
        <span>Redux Chat</span>
        <ul>
          {channels.map((channel) => {
            return (
              <li
                key={channel}
                onClick={() => selectChannel(channel)}
                className={channel === selectedChannel ? 'active' : null}
                role="presentation"
              >#{channel}</li>
            );
          })}
        </ul>
      </div>
    );
  }
}

// binds action to props, making it available
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectChannel },
    dispatch
  );
}

// maps state to props, making it available
function mapStateToProps(state) {
  return {
    selectedChannel: state.selectedChannel,
    channels: state.channels
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
