import { useState } from 'react';
import { userApi } from '../store/api/apiSlice';

const FindUser = () => {
  const [userId, setUserId] = useState<number>(0);

  // Call the hook with the userId
  const { data: user, isLoading } = userApi.useGetUserByIdQuery(userId, {
    skip: userId === 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(parseInt(e.target.value) || 0);
  };

  return (
    <div className='flex flex-col'>
      <input
        type='text'
        name='id'
        id='id'
        value={userId}
        onChange={handleChange}
        className='border border-black'
      />

      <div>
        {isLoading
          ? 'Loading...'
          : user
          ? `${user.name} ${user.lastname}`
          : 'No user found'}
      </div>
    </div>
  );
};

export default FindUser;
