import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai';
import {BsCheckLg} from 'react-icons/bs';
import {deleteTask} from '../../redux/slices/AllTodos'

import { fetchWeatherByLocation, resetWeatherError } from '../../redux/slices/ApiSlice';


function TaskList({isCompleteScreen, setIsCompleteScreen}) {
  const dispatch = useDispatch();

  const { data, loading, error, locationPermission } = useSelector((state) => state.weather);

  useEffect(() => {
    dispatch(fetchWeatherByLocation());
  }, [dispatch]);

    const {tasks} = useSelector((state) => state.alltodo);

  return (
    <div>
      { isCompleteScreen === false &&
        tasks.map((todo, index) =>{

            return(
              <div className='bg-[#414040] flex justify-between items-center px-6 py-[10px] mb-2 shadow-md rounded-[0.5rem]' 
              key={index}>
                    <div>
                      <h3 className='text-[25px] text-[#00e67a] font-bold m-0'>{todo.title}</h3>
                      <p>{todo.description}</p>
                    </div>
  
                    <div className='flex gap-1'>
                      <AiOutlineDelete
                        className="text-[35px] cursor-pointer"
                        onClick={() => dispatch(deleteTask(todo.id))} 
                        title="Delete?"
                      />
                      <BsCheckLg
                        className="text-[40px] ml-[10px] text-[#00e67a] cursor-pointer"
                        onClick={() => handleComplete (index)}
                        title="Complete?"
                      />
                    </div>
                  </div>
            )
          
        }) }

{
  isCompleteScreen === true &&
  (tasks).map((todo, index) => (
    
    <div 
       key={index}
      className='bg-[#414040] flex justify-between items-center px-6 py-[10px] mb-2 shadow-md rounded-[0.5rem]'
    >
      <div className='mb-[25px]'>
        <h3 className='text-[25px] text-[#00e67a] font-bold m-0'>{todo.title}</h3>
        <p>{todo.description}</p>
        
        <p><small>Completed on: {todo.completedOn}</small></p>

      </div>

      <div className='flex flex-col justify-center items-center gap-2 '>
        <AiOutlineDelete 
          className='text-[35px] cursor-pointer' 
          onClick={() => dispatch(deleteTask(todo.id))} 
        />
        <div className='flex flex-col '>
          <div className='flex self-center gap-1'>
            <p>{data?.name}</p>
            <img src={`https://flagcdn.com/144x108/${data?.sys?.country.toLowerCase()}.png`} alt="" className='w-[20px] h-[20px] pt-[5px]'/>
          </div>
          <div className='flex self-center gap-1'>
            <p>{`${data?.main?.temp.toFixed(2)} °C`}</p>
            <img src={`http://openweathermap.org/img/w/${data?.weather?.[0]?.icon}.png`} alt="" className='w-[32px] h-[32px]' />
          </div>
          
        </div>
      </div>
    </div>
  ))
}
    </div>
  )
}

export default TaskList;
