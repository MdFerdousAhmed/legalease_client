import React from 'react';
import LawyerHiringHistoryPage from './LawyerHiringHistoryPage';
import { getUserSession } from '@/lib/core/session';
import { getApplicationsByHire } from '@/lib/api/hire';

const page = async() => {
  const user = await getUserSession();
    // console.log(user);
    const hires = await getApplicationsByHire(user.id)
    // console.log("hires",hires);
  return (
    <div>
      <LawyerHiringHistoryPage hires={hires}/>
    </div>
  );
};

export default page;