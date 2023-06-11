import React from 'react';
import { Navigate } from 'react-router-dom';
import useAdmin from '../../Hooks/useAdmin';
import UseAuth from '../../Hooks/useAuth';
import useInstructor from '../../Hooks/useInstructor';
import Spninner from '../../Utils/Spninner';

const StudentPrivate = ({children}) => {
    const { user, loading } = UseAuth();
   const [isAdmin, isAdminLoading] = useAdmin();
    const [is_Instructor , is_Instructor_Loading] = useInstructor();

    if(loading){
        return <Spninner/>
    }

    if (user && !(isAdmin || is_Instructor)) {
        return children;
    }
    return <Navigate to="/"></Navigate>
};

export default StudentPrivate;