// import React from 'react';
// import { Card, CardHeader, CardBody, CardFooter, Avatar, Button, Chip } from "@heroui/react";
// import { Briefcase, CurrencyDollar, Calendar, ArrowRight } from '@gravity-ui/icons';

// // Mapping HeroUI to your requested syntax structure
// const CustomCard = ({ children, ...props }) => <Card {...props}>{children}</Card>;
// CustomCard.Header = ({ children, className }) => <CardHeader className={`flex gap-4 p-5 items-start ${className}`}>{children}</CardHeader>;
// CustomCard.Title = ({ children }) => <div className="flex flex-col gap-1 w-full">{children}</div>;
// CustomCard.Description = ({ children }) => <div className="text-default-600 text-sm leading-relaxed font-normal mt-2">{children}</div>;
// CustomCard.Content = ({ children }) => <CardBody className="px-5 py-0 flex flex-col gap-4">{children}</CardBody>;
// CustomCard.Footer = ({ children }) => <CardFooter className="px-5 pb-5 pt-4">{children}</CardFooter>;

// export default function LawyerCard() {
//   const lawyerData = {
//     "_id": { "$oid": "6a38c88fa43414223fdd6b13" },
//     "name": "Samrt Watch",
//     "specialization": "Family & Divorce Law",
//     "bio": "Dedicated legal professional specializing in navigating complex family matters with empathy, precision, and strategic advocacy.",
//     "fee": "70",
//     "status": "Available",
//     "photoUrl": "https://i.ibb.co/b5kHGM9k/Gemini-Generated-Image-a0bjmta0bjmta0bj.png",
//     "dateJoined": "June 22, 2026"
//   };

//   const isAvailable = lawyerData.status.toLowerCase() === 'available';

//   return (
//     <CustomCard className="max-w-[400px] border border-default-100 bg-background/60 dark:bg-default-50/50 backdrop-blur-md shadow-lg rounded-2xl overflow-hidden">
//       <CustomCard.Header>
//         <Avatar
//           isBordered
//           color={isAvailable ? "success" : "default"}
//           radius="lg"
//           src={lawyerData.photoUrl}
//           className="w-16 h-16 shrink-0 object-cover"
//           alt={lawyerData.name}
//         />
//         <CustomCard.Title>
//           <div className="flex justify-between items-center gap-2 w-full">
//             <h3 className="text-xl font-bold tracking-tight text-default-900 leading-none">
//               {lawyerData.name}
//             </h3>
//             <Chip 
//               size="sm" 
//               variant="flat" 
//               color={isAvailable ? "success" : "danger"}
//               className="capitalize font-medium text-xs px-2"
//             >
//               {lawyerData.status}
//             </Chip>
//           </div>
          
//           <div className="flex items-center gap-1.5 text-primary font-medium text-sm mt-1">
//             <Briefcase className="w-4 h-4" />
//             <span>{lawyerData.specialization}</span>
//           </div>
//         </CustomCard.Title>
//       </CustomCard.Header>

//       {/* Using Content section for the body layout & stats */}
//       <CustomCard.Content>
//         <CustomCard.Description>
//           {lawyerData.bio}
//         </CustomCard.Description>

//         {/* Info grid block */}
//         <div className="grid grid-cols-2 gap-3 bg-default-50 p-3 rounded-xl border border-default-100 w-full">
//           <div className="flex flex-col gap-0.5">
//             <span className="text-xs text-default-400 flex items-center gap-1">
//               <CurrencyDollar className="w-3.5 h-3.5" /> Hourly Rate
//             </span>
//             <span className="text-base font-semibold text-default-800">
//               ${lawyerData.fee} <span className="text-xs font-normal text-default-500">/ hr</span>
//             </span>
//           </div>
          
//           <div className="flex flex-col gap-0.5">
//             <span className="text-xs text-default-400 flex items-center gap-1">
//               <Calendar className="w-3.5 h-3.5" /> Joined
//             </span>
//             <span className="text-sm font-medium text-default-700 mt-0.5">
//               {lawyerData.dateJoined}
//             </span>
//           </div>
//         </div>
//       </CustomCard.Content>

//       <CustomCard.Footer>
//         <Button 
//           className="w-full font-semibold shadow-md bg-gradient-to-r from-primary to-primary-500 text-white"
//           radius="xl"
//           size="lg"
//           endContent={<ArrowRight className="w-4 h-4" />}
//           onPress={() => window.location.href = `/hire/${lawyerData._id.$oid}`}
//         >
//           Hire Legal Counsel
//         </Button>
//       </CustomCard.Footer>
//     </CustomCard>
//   );
// }