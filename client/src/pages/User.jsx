import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { useGetUserQuery } from '../store/API/userApi';
import EditUserModal from '../components/EditUserModal';

const User = () => {
  const state = useSelector(z => z)
  console.log(state.User.username)

  const userData = useSelector((state) => state.User);
  console.log(userData);

  const userOwner = useSelector((state) => state.User.userID);
  console.log(userOwner);

  const [data, setData] = useState(userData);
  const { oneUserData } = useGetUserQuery({ userID: userOwner });

  const userInformations = oneUserData?.User?.map(user => (
    <tr key={user._id}>
      <td className="border px-4 py-2">{User.username}</td>
      <td className="border px-4 py-2">{User.email}</td>
    </tr>
  ))

  return (
 <>
    <div>
      <h1 className='text-center text-4xl'>User informations</h1><br /><br />
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
    <EditUserModal/>
 </>
  )
};

export default User;
