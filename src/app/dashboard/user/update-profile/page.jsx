import React from 'react';

import { getUserSession } from '@/lib/core/session';
import UpdateProfilePage from './UpdateProfilePage';


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