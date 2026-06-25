import React from 'react';
import ManageUsersPage from './ManageUsersPage';
import { getUserSession } from '@/lib/core/session';

const page = async() => {
   const users = await getUserSession();
  return (
    <div>
      <ManageUsersPage/>
    </div>
  );
};

export default page;