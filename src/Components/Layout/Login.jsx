
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginStart, loginSuccess, loginFailure } from '../../redux/slices/authSlice';
import { mockLogin } from '../../redux/services/authService';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const user = await mockLogin(username, password);
      dispatch(loginSuccess(user));
      navigate('/Todo');
    } catch (err) {
      dispatch(loginFailure(err.message));
    }
   };

  return (
    <div className="w-3/5 ml-[20%] mt-[6%]">
      <h2  className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]'>Login</h2>
      {error && <div className="text-richblack-5 font-semibold text-[1.875rem] ">{error}</div>}
      <form onSubmit={handleLogin}
      className='flex flex-col w-full gap-y-4 mt-6'>
        <label >
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Enter Username<sup className='text-pink-200'>*</sup>
            </p>
            <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
          />
        </label>

        <label >
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    Enter Username<sup className='text-pink-200'>*</sup>
            </p>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
        </label>
        
        <button type="submit"
          className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6' >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;