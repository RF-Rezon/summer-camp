import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "./useAuth";

const fetchFunction = async () => {
    const {user} =  useAuth();
    // We are sending email to variry if the user is Instructor or not.
    const res = await axios.get(`http://localhost:3000/users/instructor/${user?.email}`);
    return res.data.instructor;
}

const useInstructor = () => {
    const {user} =  useAuth();
    // use axios secure with react query
    const {data: isInstructor, isLoading: isInstructorLoading} = useQuery(["isInstructor", user?.email], fetchFunction)
    return [isInstructor, isInstructorLoading]
}
export default useInstructor;