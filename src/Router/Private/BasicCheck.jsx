import React from "react";
import UseAuth from "../../Hooks/useAuth";
import Spninner from "../../Utils/Spninner";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const BasicCheck = ({ children }) => {
  const navigate = useNavigate();

  const alertHandler = () => {
    Swal.fire({
      title: "NO LOGGED IN!",
      text: `You have to log in first.`,
      icon: "error",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Go to login page",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/login");
      } else {
        navigate("/");
      }
    });
  };

  const { user, loading } = UseAuth();

  if (loading) {
    return <Spninner />;
  }
  if (!user || !user?.email) {
    alertHandler();
  } else {
    return children;
  }
};

export default BasicCheck;
