import React from 'react';
import { Navigate } from 'react-router-dom';
import UseAuth from '../../Hooks/useAuth';
import useInstructor from '../../Hooks/useInstructor';
import Spninner from '../../Utils/Spninner';

const InstructorPrivate = ({children}) => {
    const { user, loading } = UseAuth();
    const [is_Instructor , is_Instructor_Loading] = useInstructor();

    if(loading || is_Instructor_Loading){
        return <Spninner/>
    }

    if (user && is_Instructor) {
        return children;
    }
    return <Navigate to="/"></Navigate>
};

export default InstructorPrivate;