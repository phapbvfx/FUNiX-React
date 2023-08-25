import { createStore } from "redux";

const ADD_NOTE = "ADD_NOTE";

const notesReducer = (state = "Initial State", action) => {
  switch (action.type) {
    // Change code below this line
    case ADD_NOTE:
      state = action.text;
      return state;

    // Change code above this line
    default:
      return state;
  }
};

const addNoteText = (note) => {
  return { type: ADD_NOTE, text: note };
};

const store = createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText("Hello!"));
console.log(store.getState());
