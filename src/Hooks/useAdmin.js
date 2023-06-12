import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import UseAuth from "./useAuth";

const useAdmin = () => {
  const token = localStorage.getItem("access-token");
  const { user, loading } = UseAuth();
  // const token = localStorage.getItem("access-token");

  const { data: is_Admin, isLoading: is_Admin_Loading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(`https://summerproject.vercel.app/users/admin/${user?.email}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data.admin;
    },
  });
  return [is_Admin, is_Admin_Loading];
};
export default useAdmin;
