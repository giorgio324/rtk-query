import AddUser from '../components/AddUser';
import FindUser from '../components/FindUser';
import { userApi } from '../store/api/apiSlice';

const Home = () => {
  const { useGetUsersQuery } = userApi;
  const { data, error, isLoading } = useGetUsersQuery();

  if (isLoading) {
    return <p>loading...</p>;
  }
  if (error) {
    return <p>error...</p>;
  }
  return (
    <>
      {data?.map((user) => {
        return (
          <div key={user.id} className='text-sm border border-black flex gap-2'>
            <p>user id: {user.id}</p>
            <h1>{user.name}</h1>
            <h2>{user.lastname}</h2>
            <p>{user.email}</p>
            <p>{user.age}</p>
          </div>
        );
      })}
      <FindUser />
      <AddUser />
    </>
  );
};

export default Home;
