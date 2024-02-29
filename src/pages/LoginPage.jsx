import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router-dom';

const LoginPage = () => {

  const createToken = useAuth();
  const { handleSubmit, register, reset} = useForm();

  const submimt = data => {
    const url ='https://e-commerce-api-v2.academlo.tech/api/v1/users/login';
    createToken(url, data);
    reset({
      email: "",
      password: ""
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit(submimt)} >
        <div>
          <label htmlFor="user">Email</label>
          <input {...register('email')} type="email" id="user" />
        </div>
        <div>
          <label htmlFor="key">Password</label>
          <input {...register('password')} type="password" id="key" />
        </div>
        <button>Login</button>
      </form>
      <p>If you are not registered  yet then you can <Link to='/'>Register here</Link></p>
    </div>
  )
}

export default LoginPage;
