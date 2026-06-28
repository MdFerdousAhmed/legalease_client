import React from 'react';
import { getUserSession } from '@/lib/core/session';
import { getApplicationsByHire } from '@/lib/api/hire';
import HiringHistoryPage from './HiringHistoryPage';


const page = async() => {
  const user = await getUserSession();
  // console.log(user);
  const hires = await getApplicationsByHire(user.id)
  // console.log("hires",hires);
  return (
    <div>
      <HiringHistoryPage hires={hires}/>
    </div>
  );
};

export default page;