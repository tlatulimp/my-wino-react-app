import React, {Component} from 'react';

class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {fired: true, value: 'I am a base text'}
  }

  handleClick = () => {
    this.setState((prevState, props) => ({
      fired: !prevState.fired
    }));
  };

  handleKeyUp = (event) => {
    this.setState({value: event.target.value.toUpperCase()});
  };

  render() {
    return (
      <div className="welcome">
        <h2>{this.props.name}</h2>
        <button onClick={this.handleClick}>
          Click Me
        </button>
        <div>
          The state is: "{this.state.fired ? 'fired' : 'not fired'}"
        </div>
        <input value={this.state.value} onChange={this.handleKeyUp}/>
        <div>{this.state.value}</div>
      </div>
    );
  }
}

export default Welcome;