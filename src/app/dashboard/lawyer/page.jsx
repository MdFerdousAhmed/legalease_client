"use client"
import { useSession } from '@/lib/auth-client';
import React from 'react';

const LawyerDashboardHomePage = () => {

  const {data: session, isPending} = useSession();

  if(isPending) {
    return <div>Loading...</div>
  }
  const user = session?.user;
  console.log('Session data in UserDashboardHomePage', user);

  return (
    <div>
      <h2 className='text-2xl'>welcome back, {user?.name}</h2>
    </div>
  );
};

export default LawyerDashboardHomePage;