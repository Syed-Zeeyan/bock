// import { setPosts } from "@/redux/postSlice";
// import axios from "axios";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";


// const useGetAllPost = () => {
//     const dispatch = useDispatch();
//     useEffect(() => {
//         const fetchAllPost = async () => {
//             try {
//                 // const res = await axios.get('http://localhost:8000/api/v1/post/all', { withCredentials: true });
//                 const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/post/all`, { withCredentials: true });

//                 if (res.data.success) { 
//                     console.log(res.data.posts);
//                     dispatch(setPosts(res.data.posts));
//                 }
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//         fetchAllPost();
//     }, []);
// };
// export default useGetAllPost;


import { setPosts } from "@/redux/postSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetAllPost = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        const fetchAllPost = async () => {
            try {
                console.log("Fetching posts from:", import.meta.env.VITE_BASE_URL);
                
                const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/post/all`, { withCredentials: true });

                if (res.data.success) { 
                    console.log("Fetched Posts:", res.data.posts);
                    dispatch(setPosts(res.data.posts));
                }
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        fetchAllPost();
    }, [dispatch]);
};

export default useGetAllPost;
