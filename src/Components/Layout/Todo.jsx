import React, { useState } from 'react'
import TaskInput from '../Tasks/TaskInput'
import TaskList from '../Tasks/TaskList';

function Todo() {
  const [isCompleteScreen, setIsCompleteScreen] = useState (false);
  return (
    <div className='text-white '>
       <h1 className="text-center text-3xl">My Todos</h1>
      <div className="bg-[#353434] rounded-[0.5rem] p-[2%] w-fit mx-auto mt-[3%] max-h-[72vh] overflow-y-auto shadow-[0px_5px_7px_rgb(27,27,27)]">

       <TaskInput></TaskInput>
       
        <div className='mb-[15px]'>
          <button
          className={`bg-[#474747] text-white  border-0 rounded-[0.5rem] mt-6 p-2 w-fit cursor-pointer 
            ${isCompleteScreen === false && 'bg-[#00e67a]' }`}
            onClick={() => setIsCompleteScreen (false)}
          >
            Todo
          </button>
          <button 
          className={`bg-[#00e67a] text-white border-0 rounded-[0.5rem] mt-6 p-2 w-fit cursor-pointer 
            ${isCompleteScreen === true && 'bg-[#00e67a]' }`}
            onClick={() => setIsCompleteScreen (true)}>
            Completed
          </button>
        </div >
          <TaskList setIsCompleteScreen={setIsCompleteScreen} isCompleteScreen={isCompleteScreen} ></TaskList>
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default Todo
