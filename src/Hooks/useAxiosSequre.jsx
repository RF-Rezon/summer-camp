// import axios from 'axios';
// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import useAuth from './useAuth';

// const axiosSecure = axios.create({
//   baseURL: 'https://summerproject.vercel.app'
// });

// const useAxiosSecure = () => {
//   const { LogOut } = useAuth(); 
//   const navigate = useNavigate(); 

//   useEffect(() => {
//     axiosSecure.interceptors.request.use((modify) => {
//       const token = localStorage.getItem('nice-token');
//       if (token) {
//         modify.headers.Authorization = `loveJhanker ${token}`;
//       }
//       return modify;
//     });

//     axiosSecure.interceptors.response.use(
//       (response) => response,
//       async (error) => {
//         if (error.response && (error.response.status === 401 || error.response.status === 403)) {
//           await LogOut();
//           navigate('/login');
//         }
//         return Promise.reject(error);
//       }
//     );
//   }, [LogOut, navigate]);

//   return [axiosSecure];
// };

// export default useAxiosSecure;
