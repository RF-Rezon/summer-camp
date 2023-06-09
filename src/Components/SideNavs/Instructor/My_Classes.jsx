import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import Spninner from '../../../Utils/Spninner';
import MyClassesBanner from './MyClassesBanner';



const fetchedNewAddedClass = async () => {
    const res = await axios.get("http://localhost:3000/new_added_class");
    console.log(res)
    return res.data;
  };

  
const My_Classes = () => {
    const { data: addedNewClasses, isLoading, refetch } = useQuery(["for_intructor"], fetchedNewAddedClass);

    if (isLoading) return <Spninner />;
    return (
        <div className='w-5/6 flex flex-col items-center'>
            {addedNewClasses.map(singleClass=><MyClassesBanner singleClass={singleClass} key={singleClass._id}/>)}
        </div>
    );
};

export default My_Classes;