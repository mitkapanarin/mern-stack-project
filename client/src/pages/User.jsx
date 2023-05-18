import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useUpdateUserMutation } from '../store/API/userApi';
import { updateUserStateData } from '../store/Slices/userSlice';
import { toast } from 'react-toastify';
import UserInformations from './UserInformations';

const User = () => {
  const userData = useSelector((state) => state.User);
  console.log(userData);

  const userOwner = useSelector((state) => state.User.userID);
  console.log(userOwner);

  const [data, setData] = useState(userData);

  const [updateUser] = useUpdateUserMutation();

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(data)
      dispatch(updateUserStateData(data))
      toast.success('User updated successfully');
    } catch (err) {
      console.log('cannot update user', err);
      toast.error("Couldn't update, please try again");
    }
  };

  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
<>
<UserInformations/>
<form onSubmit={handleSubmit}>
      <div className="mb-6">
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Enter your new username
        </label>
        <input
          onChange={onChange}
          value={data.username}
          type="text"
          name="username"
          id="username"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="UserName"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Enter your new Email address
        </label>
        <input
          onChange={onChange}
          value={data.email}
          type="email"
          name="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="aaa@company.com"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Enter your new Password
        </label>
        <input
          onChange={onChange}
          value={data.password}
          name="password"
          type="password"
          id="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="•••••••••"
          required
        />
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
      <div className="text-2xl text-center"></div>
    </form>
</>
  );
};

export default User;