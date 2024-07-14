import { useState } from 'react';
import { User } from '../types/user';
import { userApi } from '../store/api/apiSlice';

const AddUser = () => {
  const [userFormData, setUserFormData] = useState<User>();
  const [addUser] = userApi.useAddUserMutation();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addUser({
      id: Math.random(),
      age: 20,
      email: 'test',
      lastname: 'test',
      name: 'test',
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <button type='submit' className='border border-black p-2'>
        send test user
      </button>
    </form>
  );
};

export default AddUser;
