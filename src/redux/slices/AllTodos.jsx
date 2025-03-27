
import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
    try {
      const serializedState = localStorage.getItem('alltodo');
      return serializedState ? JSON.parse(serializedState) : [];
    } catch (e) {
      return [];
    }
};
  
  const initialState = {
    tasks:loadFromLocalStorage(),
  };

export const allTodos = createSlice(
    {
        name :"alltodo",
        initialState,

        reducers:{
          addTask: (state, action) => {
            const newTask = {
              id: Date.now(),
              title: action.payload.title,
              description: action.payload.description,
              completedOn: action.payload.completedOn,
              completed: false,
            };
            
            // Create a new array with the new task and deep copied existing tasks
            return {
              ...state, // shallow copy of root state
              tasks: [
                newTask, 
                ...state.tasks.map(task => ({...task})) // deep copy each task
              ]
            };
          },

            deleteTask: (state, action) =>{
              state.tasks= state.tasks.filter((task) => task.id !== action.payload);
            },
        },
    }
)

export const {addTask, deleteTask} = allTodos.actions;
export default allTodos.reducer;
