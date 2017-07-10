import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions';
import { merge } from 'lodash';

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
};

// Reducers manage the shape of our application state (the state in Store)
const todosReducer = (oldState = initialState, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_TODOS:
      let newState = {};

      action.todos.forEach((todo) => {
        newState[todo.id] = todo;
      });

      return newState;
    case RECEIVE_TODO:
      let todos = merge({}, oldState, action.todo);
      return todos;
    default:
      return oldState;
  }
};

export default todosReducer;
