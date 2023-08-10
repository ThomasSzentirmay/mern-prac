import { useState, useReducer } from 'react';
import { useStore } from '../store';

const initial_state = {
  taskText: '',
  username: ''
};

const actions = {
    UPDATE_USERNAME: 'UPDATE_USERNAME',
    UPDATE_TASK_TEXT: 'UPDATE_TASK_TEXT'
}

const reducer = (state, actionObj) => {
  switch (actionObj.type) {
    case actions.UPDATE_USERNAME:
      return {
        ...state,
        username: actionObj.payload
      };
    case actions.UPDATE_TASK_TEXT:
      return {
        ...state,
        taskText: actionObj.payload
      }
  }
};

function Form() {
  const { setGlobalState } = useStore();
  const [state, dispatch] = useReducer(reducer, initial_state);

  const handleInputChange = e => {
    const prop = e.target.name;
    const value = e.target.value;

    switch (prop) {
      case 'username':
        dispatch({
          type: actions.UPDATE_USERNAME,
          payload: value
        });
        break;
      case 'taskText':
        dispatch({
          type: actions.UPDATE_TASK_TEXT,
          payload: value
        });
        break;
    }
  }

  const handleSubmit = e => {
    e.preventDefault();

    setGlobalState(oldState => ({
      ...oldState,
      tasks: [
        ...oldState.tasks,
        {
          text: state.taskText,
          username: state.username,
        }
      ]
    }));

    dispatch({
      type: 'UPDATE_USERNAME',
      payload: ''
    });
    dispatch({
      type: 'UPDATE_TASK_TEXT',
      payload: ''
    });
  };

  return (
    <>
      <h1>Add a Task</h1>

      <form onSubmit={handleSubmit}>
        <input name="username" value={state.username} type="text" onChange={handleInputChange} placeholder="Enter your username" />
        <input name="taskText" value={state.taskText} type="text" onChange={handleInputChange} placeholder="Enter your todo text" />
        <button>Submit</button>
      </form>
    </>
  )
}

export default Form;