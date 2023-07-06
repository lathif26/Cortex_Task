import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createUserAsync, fetchUsers, updateUserAsync } from './store';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './UserForm.css';


const UserForm = () => {
  const { register, handleSubmit, setValue, formState: {errors} } = useForm();
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const [user, setUser] =  useState(null);
    
  const dispatch = useDispatch();

  const handleFormSubmit = (data) => {
    console.log(data)
    if (user) {
        console.log(user)
      dispatch(updateUserAsync(user._id, data));
    } else {
      dispatch(createUserAsync(data));
    }
    
  };

  useEffect(()=>{
    if(id){
        const user =  users.find((user) => user._id === id);
        setValue("name", user.name);
        setValue("email", user.email);
        setValue("mobNum", user.mobNum);
        setValue("gender", user.gender);
        setValue("jobRole", user.jobRole);
        setValue("experience", user.experience);
        setValue("qualification", user.qualification);
        setUser(user);
    }
  }, [])

  return (
    <form className="form-container" onSubmit={handleSubmit(handleFormSubmit)}>
      <div>
        <label>Name</label>
        <input type="text" name="name" {...register("name", { required: true })} />
        { errors && errors.name && <span>This field is required</span>}
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          {...register("email",{ required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors && errors.email && <span>Please enter a valid email address</span>}
      </div>
      <div>
        <label>Mobile Number</label>
        <input
          type="text"
          name="mobNum"
          {...register("mobNum", { required: true, pattern: /^[0-9]{8}$/ })}
        />
        {errors && errors.mobNum && <span>Please enter a valid 8-digit mobile number</span>}
      </div>
      <div>
        <label>Gender</label>
        <div>
          <input type="radio" name="gender" value="male" {...register("gender",{ required: true })} />
          <label>Male</label>
        </div>
        <div>
          <input type="radio" name="gender" value="female" {...register("gender",{ required: true })} />
          <label>Female</label>
        </div>
      </div>
      <div>
        <label>Job Role</label>
        <input type="text" name="jobRole" {...register("jobRole", { required: true })} />
        {errors && errors.jobRole && <span>This field is required</span>}
      </div>
      <div>
        <label>Experience</label>
        <input type="text" name="experience" {...register("experience",{ required: true })} />
        {errors && errors.experience && <span>This field is required</span>}
      </div>
      <div>
        <label>Qualification</label>
        <input type="text" name="qualification" {...register("qualification",{ required: true })} />
        {errors && errors.qualification && <span>This field is required</span>}
      </div>
      {/* <input type="submit">{user ? 'Update User' : 'Create User'}</input> */}
      <input type="submit"/>
    </form>
  );
};

export default UserForm;
