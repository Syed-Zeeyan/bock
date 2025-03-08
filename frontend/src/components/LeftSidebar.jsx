// // import axios from 'axios'
// // import { toast } from 'sonner'
// // import { useNavigate } from 'react-router-dom'
// // import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
// // import { useDispatch, useSelector } from 'react-redux'
// // import { Heart, Home, LogOut, MessageCircle, PlusSquare, Search, TrendingUp } from 'lucide-react'
// // import React, { useState } from 'react'
// // import CreatePost from './CreatePost'
// // import { setAuthUser } from '@/redux/authSlice'
// // import { setPosts, setSelectedPost } from '@/redux/postSlice'
// // import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
// // import { Button } from './ui/button'

// // const LeftSidebar = () => {
// //     const navigate = useNavigate();
// //     const { user } = useSelector(store => store.auth);
// //     const { likeNotification } = useSelector(store => store.realTimeNotification);
// //     const dispatch = useDispatch();
// //     const [open, setOpen] = useState(false);

// //     const logoutHandler = async () => {
// //         try {
// //             const res = await axios.get('http://localhost:8000/api/v1/user/logout', { withCredentials: true });
// //             if (res.data.success) {
// //                 dispatch(setAuthUser(null));
// //                 dispatch(setSelectedPost(null));
// //                 dispatch(setPosts([]));
// //                 navigate("/login");
// //                 toast.success(res.data.message);
// //             }
// //         } catch (error) {
// //             toast.error(error.response.data.message);
// //         }
// //     }
// //     const sidebarHandler = (textType) => {
// //         if (textType === 'Logout') {
// //             logoutHandler();
// //         } else if (textType === "Create") {
// //             setOpen(true);
// //         } else if (textType === "Profile") {
// //             navigate(`/profile/${user?._id}`);
// //         } else if (textType === "Home") {
// //             navigate("/");
// //         } else if (textType === 'Messages') {
// //             navigate("/chat");
// //         }
// //     }


// //     const sidebarItems = [
// //         { icon: <Home />, text: "Home" },
// //         { icon: <Search />, text: "Search" },
// //         { icon: <TrendingUp />, text: "Explore" },
// //         { icon: <MessageCircle />, text: "Messages" },
// //         { icon: <Heart />, text: "Notifications" },
// //         { icon: <PlusSquare />, text: "Create" },
// //         {
// //             icon: (
// //                 <Avatar className='w-6 h-6'>
// //                     <AvatarImage src={user?.profilePicture} alt="@shadcn" />
// //                     <AvatarFallback>CN</AvatarFallback>
// //                 </Avatar>
// //             ),
// //             text: "Profile"
// //         },
// //         { icon: <LogOut />, text: "Logout" },
// //     ]


// //     return (
// //         <div className='fixed top-0 z-10 left-0 px-4 border-r border-gray-300 w-[16%] h-screen'>
// //             <div className='flex flex-col'>
// //                 <h1 className='my-8 pl-3 font-bold text-xl'>Ruviel</h1>
// //                 <div>
// //                     {
// //                         sidebarItems.map((item, index) => {
// //                             return (
// //                                 <div onClick={() => sidebarHandler(item.text)} key={index} className='flex items-center gap-3 relative hover:bg-grayflex items-center gap-3 relative hover:bg-gray-100 cursor-pointer rounded-lg p-3 my-3'>
// //                                     {item.icon}
// //                                     <span>{item.text}</span>
// //                                     {
// //                                         item.text === "Notifications" && likeNotification.length > 0 && (
// //                                             <Popover>
// //                                                 <PopoverTrigger asChild>
// //                                                     <Button size='icon' className="rounded-full h-5 w-5 bg-red-600 hover:bg-red-600 absolute bottom-6 left-6">{likeNotification.length}</Button>
// //                                                 </PopoverTrigger>
// //                                                 <PopoverContent>
// //                                                     <div>
// //                                                         {
// //                                                             likeNotification.length === 0 ? (<p>No new notification</p>) : (
// //                                                                 likeNotification.map((notification) => {
// //                                                                     return (
// //                                                                         <div key={notification.userId} className='flex items-center gap-2 my-2'>
// //                                                                             <Avatar>
// //                                                                                 <AvatarImage src={notification.userDetails?.profilePicture} />
// //                                                                                 <AvatarFallback>CN</AvatarFallback>
// //                                                                             </Avatar>
// //                                                                             <p className='text-sm'><span className='font-bold'>{notification.userDetails?.username}</span> liked your post</p>
// //                                                                         </div>
// //                                                                     )
// //                                                                 })
// //                                                             )
// //                                                         }
// //                                                     </div>
// //                                                 </PopoverContent>
// //                                             </Popover>
// //                                         )
// //                                     }
// //                                 </div>

// //                             )
// //                         })
// //                     }
// //                 </div>
// //             </div>

// //             <CreatePost open={open} setOpen={setOpen} />

// //         </div>
// //     )
// // }

// // export default LeftSidebar

// import axios from 'axios';
// import { toast } from 'sonner';
// import { useNavigate } from 'react-router-dom';
// import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
// import { useDispatch, useSelector } from 'react-redux';
// import { Heart, Home, LogOut, MessageCircle, PlusSquare, Search, TrendingUp } from 'lucide-react';
// import React, { useState } from 'react';
// import CreatePost from './CreatePost';
// import { setAuthUser } from '@/redux/authSlice';
// import { setPosts, setSelectedPost } from '@/redux/postSlice';
// import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
// import { Button } from './ui/button';

// const LeftSidebar = () => {
//     const navigate = useNavigate();
//     const { user } = useSelector(store => store.auth);
//     const { likeNotification } = useSelector(store => store.realTimeNotification);
//     const dispatch = useDispatch();
//     const [open, setOpen] = useState(false);

//     const logoutHandler = async () => {
//         try {
//             const res = await axios.get('http://localhost:8000/api/v1/user/logout', { withCredentials: true });
//             if (res.data.success) {
//                 dispatch(setAuthUser(null));
//                 dispatch(setSelectedPost(null));
//                 dispatch(setPosts([]));
//                 navigate("/login");
//                 toast.success(res.data.message);
//             }
//         } catch (error) {
//             toast.error(error.response.data.message);
//         }
//     };

//     const sidebarHandler = (textType) => {
//         if (textType === 'Logout') {
//             logoutHandler();
//         } else if (textType === "Create") {
//             setOpen(true);
//         } else if (textType === "Profile") {
//             navigate(`/profile/${user?._id}`);
//         } else if (textType === "Home") {
//             navigate("/");
//         } else if (textType === 'Messages') {
//             navigate("/chat");
//         }
//     };

//     const sidebarItems = [
//         { icon: <Home />, text: "Home" },
//         { icon: <Search />, text: "Search" },
//         { icon: <TrendingUp />, text: "Explore" },
//         { icon: <MessageCircle />, text: "Messages" },
//         { icon: <Heart />, text: "Notifications" },
//         { icon: <PlusSquare />, text: "Create" },
//         {
//             icon: (
//                 <Avatar className='w-6 h-6'>
//                     <AvatarImage src={user?.profilePicture} alt="@shadcn" />
//                     <AvatarFallback>CN</AvatarFallback>
//                 </Avatar>
//             ),
//             text: "Profile"
//         },
//         { icon: <LogOut />, text: "Logout" },
//     ];

//     return (
//         <div className='fixed top-0 z-10 left-0 px-4 border-r border-gray-300 w-[16%] h-screen'>
//             <div className='flex flex-col'>
//                 {/* Logo and App Name */}
//                 <div className='my-8 pl-3 flex items-center gap-2'>
//                     <img src="/Chain.png" alt="Logo" className='w-8 h-8' />
//                     <h1 className='font-bold text-xl'>Ruviel</h1>
//                 </div>

//                 {/* Sidebar Items */}
//                 <div>
//                     {sidebarItems.map((item, index) => (
//                         <div 
//                             onClick={() => sidebarHandler(item.text)} 
//                             key={index} 
//                             className='flex items-center gap-3 relative hover:bg-gray-100 cursor-pointer rounded-lg p-3 my-3'
//                         >
//                             {item.icon}
//                             <span>{item.text}</span>
//                             {item.text === "Notifications" && likeNotification.length > 0 && (
//                                 <Popover>
//                                     <PopoverTrigger asChild>
//                                         <Button 
//                                             size='icon' 
//                                             className="rounded-full h-5 w-5 bg-red-600 hover:bg-red-600 absolute bottom-6 left-6"
//                                         >
//                                             {likeNotification.length}
//                                         </Button>
//                                     </PopoverTrigger>
//                                     <PopoverContent>
//                                         <div>
//                                             {likeNotification.length === 0 ? (
//                                                 <p>No new notification</p>
//                                             ) : (
//                                                 likeNotification.map((notification) => (
//                                                     <div key={notification.userId} className='flex items-center gap-2 my-2'>
//                                                         <Avatar>
//                                                             <AvatarImage src={notification.userDetails?.profilePicture} />
//                                                             <AvatarFallback>CN</AvatarFallback>
//                                                         </Avatar>
//                                                         <p className='text-sm'>
//                                                             <span className='font-bold'>{notification.userDetails?.username}</span> liked your post
//                                                         </p>
//                                                     </div>
//                                                 ))
//                                             )}
//                                         </div>
//                                     </PopoverContent>
//                                 </Popover>
//                             )}
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             <CreatePost open={open} setOpen={setOpen} />
//         </div>
//     );
// };

// export default LeftSidebar;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
// import { useDispatch, useSelector } from 'react-redux';
// import { Heart, Home, LogOut, MessageCircle, PlusSquare, Search, Clapperboard } from 'lucide-react';
// import CreatePost from './CreatePost';
// import { setAuthUser } from '@/redux/authSlice';
// import { setPosts, setSelectedPost } from '@/redux/postSlice';
// import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
// import { Button } from './ui/button';
// import axios from 'axios';
// import { toast } from 'sonner';

// const LeftSidebar = () => {
//     const navigate = useNavigate();
//     const { user } = useSelector(store => store.auth);
//     const { likeNotification } = useSelector(store => store.realTimeNotification);
//     const dispatch = useDispatch();
//     const [open, setOpen] = useState(false);
//     const [searchQuery, setSearchQuery] = useState('');
//     const [sidebarOpen, setSidebarOpen] = useState(false); // Control the sidebar visibility for search

//     const logoutHandler = async () => {
//         try {
//             const res = await axios.get('http://localhost:8000/api/v1/user/logout', { withCredentials: true });
//             if (res.data.success) {
//                 dispatch(setAuthUser(null));
//                 dispatch(setSelectedPost(null));
//                 dispatch(setPosts([]));
//                 navigate("/login");
//                 toast.success(res.data.message);
//             }
//         } catch (error) {
//             toast.error(error.response.data.message);
//         }
//     };

//     const sidebarHandler = (textType) => {
//         if (textType === 'Logout') {
//             logoutHandler();
//         } else if (textType === "Create") {
//             setOpen(true);
//         } else if (textType === "Profile") {
//             navigate(`/profile/${user?._id}`);
//         } else if (textType === "Home") {
//             navigate("/");
//         } else if (textType === 'Messages') {
//             navigate("/chat");
//         } else if (textType === "Reels") {
//             navigate("/reels");
//         } else if (textType === "Search") {
//             setSidebarOpen(!sidebarOpen); // Toggle the sidebar visibility for search
//         }
//     };

//     const sidebarItems = [
//         { icon: <Home />, text: "Home" },
//         { icon: <Search />, text: "Search" },
//         { icon: <Clapperboard />, text: "Reels" }, // Updated to Reels
//         { icon: <MessageCircle />, text: "Messages" },
//         { icon: <Heart />, text: "Notifications" },
//         { icon: <PlusSquare />, text: "Create" },
//         {
//             icon: (
//                 <Avatar className='w-6 h-6'>
//                     <AvatarImage src={user?.profilePicture} alt="@shadcn" />
//                     <AvatarFallback>CN</AvatarFallback>
//                 </Avatar>
//             ),
//             text: "Profile"
//         },
//         { icon: <LogOut />, text: "Logout" },
//     ];

//     return (
//         <div className="relative">
//             <div className="fixed top-0 left-0 w-[16%] h-screen bg-white z-10 border-r border-gray-300">
//                 <div className='flex flex-col'>
//                     <div className='my-8 pl-3 flex items-center gap-2'>
//                         <img src="/Chain.png" alt="Logo" className='w-8 h-8' />
//                         <h1 className='font-bold text-xl'>Ruviel</h1>
//                     </div>
//                     <div>
//                         {sidebarItems.map((item, index) => (
//                             <div
//                                 onClick={() => sidebarHandler(item.text)}
//                                 key={index}
//                                 className='flex items-center gap-3 relative hover:bg-gray-100 cursor-pointer rounded-lg p-3 my-3'
//                             >
//                                 {item.icon}
//                                 <span>{item.text}</span>
//                                 {item.text === "Notifications" && likeNotification.length > 0 && (
//                                     <Popover>
//                                         <PopoverTrigger asChild>
//                                             <Button
//                                                 size='icon'
//                                                 className="rounded-full h-5 w-5 bg-red-600 hover:bg-red-600 absolute bottom-6 left-6"
//                                             >
//                                                 {likeNotification.length}
//                                             </Button>
//                                         </PopoverTrigger>
//                                         <PopoverContent>
//                                             <div>
//                                                 {likeNotification.length === 0 ? (
//                                                     <p>No new notification</p>
//                                                 ) : (
//                                                     likeNotification.map((notification) => (
//                                                         <div key={notification.userId} className='flex items-center gap-2 my-2'>
//                                                             <Avatar>
//                                                                 <AvatarImage src={notification.userDetails?.profilePicture} />
//                                                                 <AvatarFallback>CN</AvatarFallback>
//                                                             </Avatar>
//                                                             <p className='text-sm'>
//                                                                 <span className='font-bold'>{notification.userDetails?.username}</span> liked your post
//                                                             </p>
//                                                         </div>
//                                                     ))
//                                                 )}
//                                             </div>
//                                         </PopoverContent>
//                                     </Popover>
//                                 )}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             {/* Sliding Search Sidebar */}
//             <div
//                 className={`fixed top-0 left-0 w-[30%] h-screen bg-white shadow-xl p-6 transition-all duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
//                 style={{ zIndex: 20 }}
//             >
//                 <div className="flex items-center justify-between mb-6">
//                     <h2 className="text-black font-bold text-xl">Search</h2>
//                     <button
//                         onClick={() => setSidebarOpen(false)}
//                         className="text-black text-2xl"
//                     >
//                         &times;
//                     </button>
//                 </div>
//                 <div className="flex items-center gap-3 border-b-2 pb-4 mb-4">
//                     <Search className="text-gray-500" />
//                     <input
//                         type="text"
//                         className="w-full p-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         placeholder="Search..."
//                         value={searchQuery}
//                         onChange={(e) => setSearchQuery(e.target.value)}
//                     />
//                 </div>
//                 {searchQuery && (
//                     <div className="mt-4">
//                         <h3 className="font-medium text-black">Search results for "{searchQuery}"</h3>
//                         {/* You can dynamically show search results here */}
//                         {/* Example: List of users/posts */}
//                     </div>
//                 )}
//             </div>

//             <CreatePost open={open} setOpen={setOpen} />
//         </div>
//     );
// };

// export default LeftSidebar;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { useDispatch, useSelector } from 'react-redux';
import { Heart, Home, LogOut, MessageCircle, PlusSquare, Search, Clapperboard } from 'lucide-react';
import CreatePost from './CreatePost';
import { setAuthUser } from '@/redux/authSlice';
import { setPosts, setSelectedPost } from '@/redux/postSlice';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Button } from './ui/button';
import axios from 'axios';
import { toast } from 'sonner';

const LeftSidebar = () => {
    const navigate = useNavigate();
    const { user } = useSelector(store => store.auth);
    const { likeNotification } = useSelector(store => store.realTimeNotification);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const logoutHandler = async () => {
        try {
            // const res = await axios.get('http://localhost:8000/api/v1/user/logout', { withCredentials: true });
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/user/logout`, { withCredentials: true });

            if (res.data.success) {
                dispatch(setAuthUser(null));
                dispatch(setSelectedPost(null));
                dispatch(setPosts([]));
                navigate("/login");
                toast.success(res.data.message);
            }
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    const sidebarHandler = (textType) => {
        if (textType === 'Logout') {
            logoutHandler();
        } else if (textType === "Create") {
            setOpen(true);
        } else if (textType === "Profile") {
            navigate(`/profile/${user?._id}`);
        } else if (textType === "Home") {
            navigate("/");
        } else if (textType === 'Messages') {
            navigate("/chat");
        } else if (textType === "Reels") {
            navigate("/reels");
        } else if (textType === "Search") {
            setSidebarOpen(!sidebarOpen);
        }
    };

    const sidebarItems = [
        { icon: <Home className="text-purple-500" />, text: "Home" },
        { icon: <Search className="text-purple-500" />, text: "Search" },
        { icon: <Clapperboard className="text-purple-500" />, text: "Reels" },
        { icon: <MessageCircle className="text-purple-500" />, text: "Messages" },
        { icon: <Heart className="text-purple-500" />, text: "Notifications" },
        { icon: <PlusSquare className="text-purple-500" />, text: "Create" },
        {
            icon: (
                <Avatar className='w-6 h-6'>
                    <AvatarImage src={user?.profilePicture} alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            ),
            text: "Profile"
        },
        { icon: <LogOut className="text-purple-500" />, text: "Logout" },
    ];

    return (
        <div className="relative">
            <div className="fixed top-0 left-0 w-[16%] h-screen bg-[#1A1A1A] z-10 border-r border-[#333]">
                <div className='flex flex-col'>
                    <div className='my-8 pl-3 flex items-center gap-2'>
                        <img src="/Chain.png" alt="Logo" className='w-8 h-8' />
                        <h1 className='font-bold text-xl text-purple-500'>Ruviel</h1>
                    </div>
                    <div>
                        {sidebarItems.map((item, index) => (
                            <div
                                onClick={() => sidebarHandler(item.text)}
                                key={index}
                                className='flex items-center gap-3 relative hover:bg-[#333] cursor-pointer rounded-lg p-3 my-3'
                            >
                                {item.icon}
                                <span className="text-gray-300">{item.text}</span>
                                {item.text === "Notifications" && likeNotification.length > 0 && (
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                                size='icon'
                                                className="rounded-full h-5 w-5 bg-red-600 hover:bg-red-600 absolute bottom-6 left-6"
                                            >
                                                {likeNotification.length}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="bg-[#1A1A1A] border-[#333] text-white">
                                            <div>
                                                {likeNotification.length === 0 ? (
                                                    <p>No new notification</p>
                                                ) : (
                                                    likeNotification.map((notification) => (
                                                        <div key={notification.userId} className='flex items-center gap-2 my-2'>
                                                            <Avatar>
                                                                <AvatarImage src={notification.userDetails?.profilePicture} />
                                                                <AvatarFallback>CN</AvatarFallback>
                                                            </Avatar>
                                                            <p className='text-sm'>
                                                                <span className='font-bold'>{notification.userDetails?.username}</span> liked your post
                                                            </p>
                                                        </div>
                                                    ))
                                                )}
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Sliding Search Sidebar */}
            <div
                className={`fixed top-0 left-0 w-[30%] h-screen bg-[#1A1A1A] shadow-xl p-6 transition-all duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
                style={{ zIndex: 20 }}
            >
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-purple-500 font-bold text-xl">Search</h2>
                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="text-purple-500 text-2xl"
                    >
                        &times;
                    </button>
                </div>
                <div className="flex items-center gap-3 border-b-2 border-[#333] pb-4 mb-4">
                    <Search className="text-purple-500" />
                    <input
                        type="text"
                        className="w-full p-2 rounded-lg bg-[#333] text-white border-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                {searchQuery && (
                    <div className="mt-4">
                        <h3 className="font-medium text-purple-500">Search results for "{searchQuery}"</h3>
                        {/* Dynamically show search results here */}
                    </div>
                )}
            </div>

            <CreatePost open={open} setOpen={setOpen} />
        </div>
    );
};

export default LeftSidebar;

