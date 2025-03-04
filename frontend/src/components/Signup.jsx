// import React, { useState } from 'react'
// import { Input } from './ui/input'
// import { Button } from './ui/button'
// import axios from 'axios';
// import { toast } from 'sonner';
// import { Link, useNavigate } from 'react-router-dom';
// import { Loader2 } from 'lucide-react';
// // import { useSelector } from 'react-redux';

// const Signup = () => {
//   const [input, setInput] = useState({
//     username: "",
//     email: "",
//     password: ""
//   });

//   const [loading, setLoading] = useState(false);
//   // const {user} = useSelector(store=>store.auth);
//   const navigate = useNavigate();
//   const changeEventHandler = (e) => {
//     setInput({ ...input, [e.target.name]: e.target.value });
//   }
//   const signupHandler = async (e) => {
//     e.preventDefault();
//     try {
//       setLoading(true);
//       const res = await axios.post('http://localhost:8000/api/v1/user/register', input, {
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         withCredentials: true
//       });
//       if (res.data.success) {
//         navigate("/login");
//         toast.success(res.data.message);
//         setInput({
//           username: "",
//           email: "",
//           password: ""
//         });
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.response.data.message);
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div className='flex items-center w-screen h-screen justify-center'>
//       <form onSubmit={signupHandler} className='shadow-lg flex flex-col gap-5 p-8'>
//         <div className='my-4'>
//           <h1 className='text-center font-bold text-xl'>Ruviel</h1>
//           <p className='text-sm text-center'>Signup to see photos & videos from your friends</p>
//         </div>
//         <div>
//           <span className='font-medium'>Username</span>
//           <Input
//             type="text"
//             name="username"
//             value={input.username}
//             onChange={changeEventHandler}
//             className="focus-visible:ring-transparent my-2"
//           />
//         </div>
//         <div>
//           <span className='font-medium'>Email</span>
//           <Input
//             type="email"
//             name="email"
//             value={input.email}
//             onChange={changeEventHandler}
//             className="focus-visible:ring-transparent my-2"
//           />
//         </div>
//         <div>
//           <span className='font-medium'>Password</span>
//           <Input
//             type="password"
//             name="password"
//             value={input.password}
//             onChange={changeEventHandler}
//             className="focus-visible:ring-transparent my-2"
//           />
//         </div>
//         {
//           loading ? (
//             <Button>
//               <Loader2 className='mr-2 h-4 w-4 animate-spin' />
//               Please wait
//             </Button>
//           ) : (
//             <Button type='submit'>Signup</Button>
//           )
//         }
//         <span className='text-center'>Already have an account? <Link to="/login" className='text-blue-600'>Login</Link></span>
//       </form>
//     </div>
//   )
// }

// export default Signup

// import React, { useState } from 'react';
// import { Input } from './ui/input';
// import { Button } from './ui/button';
// import axios from 'axios';
// import { toast } from 'sonner';
// import { Link, useNavigate } from 'react-router-dom';
// import { Loader2 } from 'lucide-react';

// const Signup = () => {
//   const [input, setInput] = useState({
//     username: "",
//     email: "",
//     password: ""
//   });

//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const changeEventHandler = (e) => {
//     setInput({ ...input, [e.target.name]: e.target.value });
//   };

//   const signupHandler = async (e) => {
//     e.preventDefault();
//     try {
//       setLoading(true);
//       const res = await axios.post('http://localhost:8000/api/v1/user/register', input, {
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         withCredentials: true
//       });
//       if (res.data.success) {
//         navigate("/login");
//         toast.success(res.data.message);
//         setInput({
//           username: "",
//           email: "",
//           password: ""
//         });
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.response?.data?.message || "An error occurred");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className='flex items-center w-screen h-screen justify-center'>
//       <form onSubmit={signupHandler} className='shadow-lg flex flex-col gap-5 p-8'>
//         <div className='my-4 flex items-center justify-center gap-2'>
//           <img src="/Chain.png" alt="Logo" className='w-10 h-10' />
//           <h1 className='font-bold text-xl'>Ruviel</h1>
//         </div>
//         <p className='text-sm text-center'>Signup to see photos & videos from your friends</p>
//         <div>
//           <span className='font-medium'>Username</span>
//           <Input
//             type="text"
//             name="username"
//             value={input.username}
//             onChange={changeEventHandler}
//             className="focus-visible:ring-transparent my-2"
//           />
//         </div>
//         <div>
//           <span className='font-medium'>Email</span>
//           <Input
//             type="email"
//             name="email"
//             value={input.email}
//             onChange={changeEventHandler}
//             className="focus-visible:ring-transparent my-2"
//           />
//         </div>
//         <div>
//           <span className='font-medium'>Password</span>
//           <Input
//             type="password"
//             name="password"
//             value={input.password}
//             onChange={changeEventHandler}
//             className="focus-visible:ring-transparent my-2"
//           />
//         </div>
//         {loading ? (
//           <Button>
//             <Loader2 className='mr-2 h-4 w-4 animate-spin' />
//             Please wait
//           </Button>
//         ) : (
//           <Button type='submit'>Signup</Button>
//         )}
//         <span className='text-center'>
//           Already have an account? <Link to="/login" className='text-blue-600'>Login</Link>
//         </span>
//       </form>
//     </div>
//   );
// };

// export default Signup;

import React, { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import axios from 'axios';
import { toast } from 'sonner';
import { Link, useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

const Signup = () => {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const signupHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      // const res = await axios.post('http://localhost:8000/api/v1/user/register', input, {
        const res = await axios.post(`${process.env.BASE_URL}/user/register`, input, {

        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
        setInput({
          username: "",
          email: "",
          password: ""
        });
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex items-center w-screen h-screen justify-center bg-black'>
      <form onSubmit={signupHandler} className='shadow-lg flex flex-col gap-5 p-8 bg-[#1A1A1A] rounded-lg border border-[#333] w-full max-w-md'>
        <div className='my-4 flex items-center justify-center gap-2'>
          <img src="/Chain.png" alt="Logo" className='w-10 h-10' />
          <h1 className='font-bold text-xl text-purple-500'>Ruviel</h1>
        </div>
        <p className='text-sm text-center text-gray-400'>Signup to see photos & videos from your friends</p>
        <div>
          <span className='font-medium text-gray-300'>Username</span>
          <Input
            type="text"
            name="username"
            value={input.username}
            onChange={changeEventHandler}
            className="focus-visible:ring-transparent my-2 bg-[#333] text-white rounded-full border-none placeholder-gray-400"
            placeholder="Enter your username"
          />
        </div>
        <div>
          <span className='font-medium text-gray-300'>Email</span>
          <Input
            type="email"
            name="email"
            value={input.email}
            onChange={changeEventHandler}
            className="focus-visible:ring-transparent my-2 bg-[#333] text-white rounded-full border-none placeholder-gray-400"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <span className='font-medium text-gray-300'>Password</span>
          <Input
            type="password"
            name="password"
            value={input.password}
            onChange={changeEventHandler}
            className="focus-visible:ring-transparent my-2 bg-[#333] text-white rounded-full border-none placeholder-gray-400"
            placeholder="Enter your password"
          />
        </div>
        {loading ? (
          <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full">
            <Loader2 className='mr-2 h-4 w-4 animate-spin' />
            Please wait
          </Button>
        ) : (
          <Button type='submit' className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full">
            Signup
          </Button>
        )}
        <span className='text-center text-gray-400'>
          Already have an account? <Link to="/login" className='text-purple-500 hover:text-purple-400'>Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Signup;
