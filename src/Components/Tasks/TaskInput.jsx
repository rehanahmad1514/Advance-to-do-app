import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { addTask } from '../../redux/slices/TodoSlice';
import {addTask} from '../../redux/slices/AllTodos'

const TaskInput = () => {
  const [newTitle, setNewTitle] = useState ('');
  const [newDescription, setNewDescription] = useState('');
  // const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();

  

  const handleAddTodo = ()=> {

    let now = new Date ();
    let dd = now.getDate ();
    let mm = now.getMonth () + 1;
    let yyyy = now.getFullYear ();
    let h = now.getHours ();
    let m = now.getMinutes ();
    let s = now.getSeconds ();
    let completedOn =
    dd + '-' + mm + '-' + yyyy + ' at ' + h + ':' + m + ':' + s;
      dispatch(addTask({ title: newTitle, description: newDescription,completedOn:completedOn}));
  };

  return (
    <form className="flex items-center justify-center border-b border-gray-600 pb-6 mb-6"
>
         <div className="flex flex-col items-start mr-6">
            <label className='font-bold mb-2'>Title</label>
            <input
              type="text"
              value={newTitle}
              onChange={e => setNewTitle (e.target.value)}
              placeholder="What's the task title?"
              className=" w-[300px] bg-richblack-800 rounded-0 text-richblack-5 p-[12px] rounded-[0.5rem]"
              required
            />
        </div>
        <div className="flex flex-col items-start mr-6">
            <label className='font-bold mb-2'>Description</label>
            <input
              type="text"
              value={newDescription}
              onChange={e => setNewDescription (e.target.value)}
              placeholder="What's the task description?"
              className=" w-[300px] bg-richblack-800 rounded-0 text-richblack-5 p-[12px] rounded-[0.5rem]"
              required
            />
          </div>

          <div className="flex flex-col items-start mr-6">
            <button
              type="button"
              className="bg-[#00e67a] text-white border-0 mt-6 p-2 w-[60px] cursor-pointer hover:bg-[#04c46a] rounded-[0.5rem]"
              onClick={handleAddTodo}
            >
              Add
            </button>
        </div>
    </form>
  );
};

export default TaskInput;