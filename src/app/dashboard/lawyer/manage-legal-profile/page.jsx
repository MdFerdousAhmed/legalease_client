
// import { lawyerGet } from '@/lib/api/lawyer';
import ManageLegalProfilePage from './ManageLegalProfilePage';
import { getUserSession } from '@/lib/core/session';


const page = async({params}) => {
  // const {id} = await params;
  // const lawyer = await lawyerGet(id)
  const users = await getUserSession();
  console.log(users);
  return (
    <div>
      <ManageLegalProfilePage users={users}/>
    </div>
  );
};

export default page;