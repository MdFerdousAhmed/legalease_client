import React from 'react';
import ManageLegalProfilePage from './ManageLegalProfilePage';
import { getUserSession } from '@/lib/core/session';

const page = () => {
  const users = getUserSession();
  console.log(users);
  return (
    <div>
      <ManageLegalProfilePage/>
    </div>
  );
};

export default page;