import React from 'react';
import UpdateProfilePage from './UpdateProfilePage';
import { getUserSession } from '@/lib/core/session';


const page = async() => {
  const users = await getUserSession();
   console.log(users);
  return (
    <div>
      <UpdateProfilePage users={users}/>
    </div>
  );
};

export default page;