// import React from 'react'
// import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
// import { useSelector } from 'react-redux'
// import { Link } from 'react-router-dom';
// import SuggestedUsers from './SuggestedUsers';

// const RightSidebar = () => {
//   const { user } = useSelector(store => store.auth);
//   return (
//     <div className='w-fit my-10 pr-32'>
//       <div className='flex items-center gap-2'>
//         <Link to={`/profile/${user?._id}`}>
//           <Avatar>
//             <AvatarImage src={user?.profilePicture} alt="post_image" />
//             <AvatarFallback>CN</AvatarFallback>
//           </Avatar>
//         </Link>
//         <div>
//           <h1 className='font-semibold text-sm'><Link to={`/profile/${user?._id}`}>{user?.username}</Link></h1>
//           <span className='text-gray-600 text-sm'>{user?.bio || 'Bio here...'}</span>
//         </div>
//       </div>
//       <SuggestedUsers/>
//     </div>
//   )
// }

// export default RightSidebar

// import React from 'react';
// import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import SuggestedUsers from './SuggestedUsers';

// const RightSidebar = () => {
//     const { user } = useSelector(store => store.auth);
//     return (
//         <div className='w-fit my-10 pr-32 bg-black'>
//             <div className='flex items-center gap-2'>
//                 <Link to={`/profile/${user?._id}`}>
//                     <Avatar>
//                         <AvatarImage src={user?.profilePicture} alt="post_image" />
//                         <AvatarFallback>CN</AvatarFallback>
//                     </Avatar>
//                 </Link>
//                 <div>
//                     <h1 className='font-semibold text-sm text-purple-500'>
//                         <Link to={`/profile/${user?._id}`}>{user?.username}</Link>
//                     </h1>
//                     <span className='text-gray-400 text-sm'>{user?.bio || 'Bio here...'}</span>
//                 </div>
//             </div>
//             <SuggestedUsers />
//         </div>
//     );
// };

// export default RightSidebar;

import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SuggestedUsers from './SuggestedUsers';

const RightSidebar = () => {
    const { user } = useSelector(store => store.auth);

    return (
        <div className='w-fit min-h-screen pr-32 bg-[#252525] p-6 rounded-lg border border-[#333] flex flex-col'>
            {/* User Profile Section */}
            <div className='flex items-center gap-2 mb-6'>
                <Link to={`/profile/${user?._id}`}>
                    <Avatar className="w-10 h-10">
                        <AvatarImage src={user?.profilePicture} alt="profile_image" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </Link>
                <div>
                    <h1 className='font-semibold text-sm text-purple-500'>
                        <Link to={`/profile/${user?._id}`}>{user?.username}</Link>
                    </h1>
                    <span className='text-gray-400 text-sm'>{user?.bio || 'Bio here...'}</span>
                </div>
            </div>
            
            {/* Suggested Users Section */}
            <div className="flex-grow">
                <SuggestedUsers />
            </div>
        </div>
    );
};

export default RightSidebar;




