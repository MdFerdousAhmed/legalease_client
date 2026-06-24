import React from 'react';
import CommentsPage from './CommentsPage';
import { getUserSession } from '@/lib/core/session';
import { getApplicationsByHire } from '@/lib/api/hire';

const page = async() => {
  const user = await getUserSession();
    // console.log(user);
    const hires = await getApplicationsByHire(user.id)
    // console.log("hires",hires);
  return (
    <div>
      <CommentsPage hires={hires}/>

    </div>
  );
};

export default page;