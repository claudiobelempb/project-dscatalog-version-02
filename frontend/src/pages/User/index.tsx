import { User } from 'app/types/User';
import { Spring } from 'app/types/vendor/Spring';
import { UserFindAll } from 'hooks/users/UserFindAll';
import React, { useEffect, useState } from 'react';
import { LayoutDashBoard } from '../../components/Layout/LayoutDashBoard';

const UserPage: React.FC = () => {
  const [users, setUsers] = useState<Spring<User>>();

  useEffect(() => {
    UserFindAll().then(response => {
      setUsers(response.data);
      console.log('Users: ', response.data);
    });
  }, []);

  return (
    <LayoutDashBoard title="Users">
      <div>
        <h1>Users</h1>
        {users?.content.map(user => (
          <div key={user.id}>
            <p>
              {user.email} - {user.status ? 'Ativo' : 'Inativo'}
              {user.roles.map(role => role.id)}
            </p>
          </div>
        ))}
      </div>
    </LayoutDashBoard>
  );
};

export default UserPage;
