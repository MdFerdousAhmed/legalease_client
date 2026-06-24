import { lawyerGet } from '@/lib/api/lawyer';
import { getUserSession } from '@/lib/core/session';
import { redirect } from 'next/navigation';
import React from 'react';
import HireLawyerForm from './HireLawyerForm';

const HirePage = async({params}) => {
  const {id} = await params;

  const user = await getUserSession();

  if(!user) {
    redirect(`/auth/signin?redirect=/browse-lawyers/${id}/hire`);
  }

  if(user.role !== 'user') {
    return(
      <div className='w-full min-h-screen bg-gray-300 flex flex-col justify-center items-center text-white p-6'>
        <p className='text-black text-lg'>Only user can hire for this. Please sign in with a user account to proceed.</p>
      </div>
    )
  }

  const lawyer = await lawyerGet(id)

  return (
    <div>
      <HireLawyerForm client={user} lawyer={lawyer}/>
    </div>
  );
};

export default HirePage;