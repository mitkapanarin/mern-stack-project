import React from 'react';
import { useSelector } from 'react-redux';
import { useGetUserQuery } from '../store/API/userApi';

const UserInformations = () => {

  const userOwner = useSelector((state) => state.User.userID);

  const { data: oneUserData } = useGetUserQuery(userOwner);

  const userInformations = oneUserData?.User?.map((user) => (
    <tr key={user.userID}>
      <td className="border px-4 py-2">{user.username}</td>
      <td className="border px-4 py-2">{user.email}</td>
    </tr>
  ));

  return (
    <div>
      <h1 className='text-center text-4xl'>User informations</h1>
      <br /><br />
      <div className="mx-auto">
        <table className="table-auto mx-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Username</th>
              <th className="px-4 py-2">Email</th>
            </tr>
          </thead>
          <tbody>
            {userInformations}
          </tbody>
        </table>
        <br />
      </div>
    </div>
  );
};

export default UserInformations;
