import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import UseAuth from "./useAuth";


const useInstructor = () => {
    const {user, loading} = UseAuth();
    const token = localStorage.getItem("access-token");
    
    const {data: is_Instructor , isLoading: is_Instructor_Loading} = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios.get(`https://summerproject.vercel.app/users/instructor/${user?.email}`, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });
            return res.data.instructor;
        }
    })
    
    return [is_Instructor , is_Instructor_Loading];
    
}
export default useInstructor;