import React, { useContext, useEffect, useState, useCallback } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [state, setState] = useState('Sign Up');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    studentId: '',
  });

  const navigate = useNavigate();
  const { backendUrl, token, setToken } = useContext(AppContext);

  // Memoized email validation function
  const validateEmail = useCallback((email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@students\.uc-bcf\.edu\.ph$/;
    return emailRegex.test(email);
  }, []);

  // Memoized student ID validation function
  const validateStudentId = useCallback((id) => {
    const studentIdRegex = /^\d{2}-\d{4}-\d{3}$/;
    return studentIdRegex.test(id);
  }, []);

  // Form submission handler
  const onSubmitHandler = useCallback(
    async (event) => {
      event.preventDefault();

      const { name, email, password, studentId } = formData;

      // Validate email
      if (!validateEmail(email)) {
        toast.error('Please enter a valid email address with @students.uc-bcf.edu.ph');
        return;
      }

      // Validate student ID for sign-up
      if (state === 'Sign Up' && !validateStudentId(studentId)) {
        toast.error('Please enter a valid student ID in the format ##-####-###');
        return;
      }

      try {
        const endpoint = state === 'Sign Up' ? '/api/user/register' : '/api/user/login';
        const payload =
          state === 'Sign Up'
            ? { name, email, password, studentId }
            : { email, password };

        const { data } = await axios.post(`${backendUrl}${endpoint}`, payload);

        if (data.success) {
          localStorage.setItem('token', data.token);
          setToken(data.token);
          toast.success(state === 'Sign Up' ? 'Account created successfully!' : 'Login successful!');
        } else {
          toast.error(data.message || 'An error occurred.');
        }
      } catch (error) {
        console.error(error);
        toast.error('Something went wrong. Please try again.');
      }
    },
    [state, formData, validateEmail, validateStudentId, backendUrl, setToken]
  );

  // Effect to navigate when token is set
  useEffect(() => {
    if (token) {
      navigate('/login');
    }
  }, [token, navigate]);

  // Update form data handler
  const onInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg">
        <p className="text-2xl font-semibold">{state === 'Sign Up' ? 'Create Account' : 'Login'}</p>
        <p>Please {state === 'Sign Up' ? 'sign up' : 'log in'} to book an appointment</p>

        {state === 'Sign Up' && (
          <>
            <div className="w-full">
              <p>Full Name</p>
              <input
                name="name"
                onChange={onInputChange}
                value={formData.name}
                className="border border-[#DADADA] rounded w-full p-2 mt-1"
                type="text"
                required
              />
            </div>
            <div className="w-full">
              <p>Student ID</p>
              <input
                name="studentId"
                onChange={onInputChange}
                value={formData.studentId}
                className="border border-[#DADADA] rounded w-full p-2 mt-1"
                type="text"
                required
              />
            </div>
          </>
        )}

        <div className="w-full">
          <p>Email</p>
          <input
            name="email"
            onChange={onInputChange}
            value={formData.email}
            className="border border-[#DADADA] rounded w-full p-2 mt-1"
            type="email"
            required
          />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input
            name="password"
            onChange={onInputChange}
            value={formData.password}
            className="border border-[#DADADA] rounded w-full p-2 mt-1"
            type="password"
            required
          />
        </div>
        <button className="bg-[#0f291f] hover:bg-[#53645e] text-white w-full py-2 my-2 rounded-md text-base">
          {state === 'Sign Up' ? 'Create account' : 'Login'}
        </button>

        {state === 'Sign Up' ? (
          <p>
            Already have an account?{' '}
            <span onClick={() => setState('Login')} className="text-[#0f291f] underline cursor-pointer">
              Login here
            </span>
          </p>
        ) : (
          <p>
            Create a new account?{' '}
            <span onClick={() => setState('Sign Up')} className="text-[#0f291f] underline cursor-pointer">
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
