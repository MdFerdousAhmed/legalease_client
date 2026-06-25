import AdminUsersTable from '@/components/AdminUsersTable';
import { getUsersList } from '@/lib/api/users';
import React from 'react';

const AdminUsersPage = async() => {
  const data = await getUsersList()
  const users = data?.users
  return (
    <div>
      <h2 className='text-4xl p-4'>Users Role Data</h2>
      <AdminUsersTable users={users}/>
    </div>
  );
};

export default AdminUsersPage;