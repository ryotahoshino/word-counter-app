import React, {Component} from 'react';

const App = () => <Counter />

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0, textValue: 'initial value'};
  }

  handleTextChange(textValue) {
    this.setState({textValue});
  }

  handleCountChange(textLength) {
    this.setState({count: textLength});
  }

  render() {
    return (
      <React.Fragment>
        <textarea
          type="text"
          onChange={e => this.handleTextChange(e.target.value)}
          onKeyUp={e => this.handleCountChange(e.target.value.length)}
        />
        <div>{this.state.count}/50</div>
      </React.Fragment>
    )
  }
}

export default Counter;