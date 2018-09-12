import React from 'react';
import SockJsClient from 'react-stomp';

export default class Websocket extends React.Component {

  sendMessage = (msg) => {
    this.clientRef.sendMessage('/topics/all', msg);
  };

  render() {
    return (
      <div>
        <SockJsClient url={this.props.url} topics={this.props.topics}
                      onMessage={(msg) => { this.props.onMessage(msg); }}
                      ref={ (client) => { this.clientRef = client }} />
      </div>
    );
  }
}