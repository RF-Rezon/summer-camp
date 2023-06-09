import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Spninner from "../../../Utils/Spninner";


const scondTimefetchedAddedData = async () => {
  const res = await axios.get("http://localhost:3000/new_added_class");
  return res.data;
};

const My_Classes = () => {

  const { data: addedNewClasses, isLoading, refetch } = useQuery(["added_new_class2"], scondTimefetchedAddedData);

  if (isLoading) return <Spninner />;
  return (
    <div>
      <div className="grid md:grid-cols-2 m-10">
        {addedNewClasses.map((newSingleClass) => (
          <div key={newSingleClass._id} className="h-3/4 m-7 flex flex-col items-center justify-center">
            <div
              className={
                newSingleClass.av_seats > 1
                  ? "card glass md:card-side w-full m-5"
                  : "card md:card-side w-full bg-red-500 m-5"
              }
            >
              <div className="card-body">
                <span className="font-semibold text-2xl text-zinc-700">Class: </span>
                <h2 className="card-title">{newSingleClass.c_name}</h2>
                <span className="font-semibold text-2xl text-zinc-700">Instructor: </span>
                <p>{newSingleClass.i_name}</p>
                <span className="font-semibold text-2xl text-zinc-700">Instructor Email: </span>
                <p>{newSingleClass.i_email}</p>
                <span className="font-semibold text-2xl text-zinc-700">Available Seats: </span>
                <p>{newSingleClass.av_seats}</p>
                <span className="font-semibold text-2xl text-zinc-700">Price: </span>
                <p>{newSingleClass.price}</p>
                <span className="font-semibold text-2xl text-zinc-700">Status: </span>
                <p>{newSingleClass.status}</p>
              </div>
              <figure className="h-full">
                <img src={newSingleClass.c_photoURL} alt="instructor" className="h-full w-full object-cover" />
              </figure>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default My_Classes;
