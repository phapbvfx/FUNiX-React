const state = [];

// Change code below this line

const mapStateToProps = (state) => ({ messages: state });

const addMessage = (message) => {
  return {
    type: "ADD",
    message: message,
  };
};

// Change code below this line

const mapDispatchToProps = (dispatch) => ({
  submitNewMessage: (message) => dispatch(addMessage(message)),
});
