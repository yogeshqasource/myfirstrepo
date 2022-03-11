import React from 'react';
export default class MyButton extends React.Component {

  state = {
    buttonState: 0
  };

  testFunction(e) {
    this.setState({ buttonState: this.state.buttonState + 1  });
    this.props.handleTestButton(this.state.buttonState);
  }

  render() {
    return (
      <React.Fragment>
        <button style={{ color: 'red' }} disabled={this.props.disableButton} onClick={() => this.testFunction()}>{this.props.children}</button>
      </React.Fragment>
    );
  }
}