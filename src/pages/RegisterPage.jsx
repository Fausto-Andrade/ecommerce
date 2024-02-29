import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';

const RegisterPage = () => {

  const createUser = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const submit = data => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users';
    createUser(url, data);
    reset({
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      phone: ""
    });
  }


  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="name">Name</label>
          <input {...register('firstName')} type="text" id="name"/>
        </div>
        <div>
          <label htmlFor="last">Last Name</label>
          <input {...register('lastName')} type="text" id="last"/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input {...register('email')} type="text" id="email"/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input {...register('password')} type="text" id="password"/>
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input {...register('phone')} type="text" id="phone"/>
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default RegisterPage;