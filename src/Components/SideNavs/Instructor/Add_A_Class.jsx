import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import UseAuth from "../../../Hooks/useAuth";


const Add_A_Class = () => {

    const {user, webUrl} = UseAuth();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const newObject = {
      ...data ,
      feedBack: ""
    }
    axios.post(`${webUrl}/newAddedClass`, newObject,
    {
      "Content-Type": "application/json",
    }
    )
    .then(res=> {
        Swal.fire({
            icon: "success",
            title: "Ya!..",
            text: `Addeded class successfully.`
          })
    })
};

  return (
    <div className="md:w-2/5 px-6 min-h-screen overflow-hidden">
      <div className="mt-48 md:mt-0">
        <div className="bg-custom bg-opacity-40 border-b-black border-b-[3px] py-24 flex items-center justify-center my-10">
            <div className="text-4xl font-semibold">
              <p>
                <span className="bg-custom p-2 ml-2">Add</span> class here.
              </p>
            </div>
          </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className="py-5 font-semibold text-gray-800 text-base">
            Class Name
          </p>
          <div className="relative z-0 w-full mb-6 group">
            <select {...register("c_name")} className="select select-info w-full max-w-xs text-gray-800 bg-white">
              <option className="text-gray-800" value="Piano Prowess: Keys to Excellence">Piano</option>
              <option className="text-gray-800" value="Guitar Mastery: Fretboard Fundamentals ">Guiter</option>
              <option className="text-gray-800" value="Violin Virtuosity: Bow to Strings">Violin</option>
              <option className="text-gray-800" value="Drum Dynamics: Rhythm Revolution">Drums</option>
              <option className="text-gray-800" value="Bass Groove: Low-End Explorations">Bass</option>
              <option className="text-gray-800" value="Saxophone Serenade: Wind Harmony">Saxophone</option>
            </select>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              {...register("photoURL")}
              type="url"
              id="floating_repeat_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-custom focus:outline-none focus:ring-0 focus:border-custom peer"
              placeholder=""
              required
            />
            <label
              htmlFor="floating_repeat_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-custom peer-focus:dark:text-custom peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Class Image
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              {...register("name")}
              type="text"
              id="floating_repeat_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-custom focus:outline-none focus:ring-0 focus:border-custom peer"
              placeholder=" "
              readOnly
              value={user?.displayName || ""}
            />
            <label
              htmlFor="floating_repeat_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-custom peer-focus:dark:text-custom peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Instructor Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              {...register("email")}
              type="email"
              id="floating_repeat_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-custom focus:outline-none focus:ring-0 focus:border-custom peer"
              placeholder=" "
              readOnly
              value={user?.email || ""}
            />
            <label
              htmlFor="floating_repeat_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-custom peer-focus:dark:text-custom peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Instructor Email
            </label>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                {...register("av_seats")}
                type="number"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-custom focus:outline-none focus:ring-0 focus:border-custom peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-custom peer-focus:dark:text-custom peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Available Sits
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                {...register("price")}
                type="number"
                id="floating_last_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-custom focus:outline-none focus:ring-0 focus:border-custom peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-custom peer-focus:dark:text-custom peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Price
              </label>
            </div>
            <div className="relative z-0 w-full group mb-6">
              <input
                {...register("description")}
                type="text"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-custom focus:outline-none focus:ring-0 focus:border-custom peer"
                required
                placeholder=" "
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-custom peer-focus:dark:text-custom peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Description
              </label>
            </div>
            <div className="hidden"><input type="number" {...register("enrolled")} defaultValue="0" /></div>
            <div className="relative z-0 w-full group">
              <p className="font-medium">Status: </p>
              <input
                {...register("status")}
                type="text"
                className="py-4 w-full px-4 bg-yellow-500 text-gray-800 font-medium"
                value="pending"
                readOnly
              />
            </div>
          </div>
          <input
            type="submit"
            className="bg-teal-700 px-5 py-2.5 text-base font-medium shadow cursor-pointer"
            value="Add Class"
          />
        </form>
      </div>
    </div>
  );
};

export default Add_A_Class;