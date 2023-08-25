import React from "react";

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      messages: [],
    };
  }
  hanlerOnchangeInput(e) {
    this.setState((prev) => ({ ...prev, input: e.target.value }));
  }

  handlerAddNewMessage() {
    const { messages } = this.state;
    messages.push(this.state.input);
    this.setState((prev) => ({ input: "", messages }));
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>

        <input
          type="text"
          value={this.state.input}
          onChange={this.hanlerOnchangeInput.bind(this)}
        />

        <button onClick={this.handlerAddNewMessage.bind(this)}>
          Add message
        </button>
        <ul>
          {this.state.messages.map((mes, i) => (
            <li key={i}>{mes}</li>
          ))}
        </ul>

        {/* Change code above this line */}
      </div>
    );
  }
}

export default DisplayMessages;
