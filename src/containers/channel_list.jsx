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
      <div className="message-list col-sm-3">
        {channels.map((channel) => {
          let classes = "channel";
          if (channel === selectedChannel) { classes += " selected"; }

          return (
            <li
              key={channel}
              onClick={() => selectChannel(channel)}
              className={classes}
            >#{channel}</li>
          );
        })}
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
