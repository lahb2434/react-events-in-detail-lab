import React from "react";

class DelayedButton extends React.Component {
    render() {
      return <button onClick={ event => {
				event.persist();
				setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
			}}
    	>DelayedButton</button>;
    }
  }

export default DelayedButton
