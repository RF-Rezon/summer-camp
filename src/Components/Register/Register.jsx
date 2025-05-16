import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UseAuth from "../../Hooks/useAuth";

// const token = localStorage.getItem("access-token");
const Register = () => {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const { normalRegister, updateUser, webUrl } = UseAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  
  const [eye, setEye] = useState(true);

  const onSubmit = (data) => {
    if (data?.password !== data?.confirm_password) {
      setErrorMsg("Password didn't match. Check Again");
      return;
    }
    normalRegister(data?.email, data?.password)
      .then(() => {
        updateUser(data?.name, data?.photoURL)
          .then(() => {
            axios
              .post(
                `${webUrl}/users`,
                { name: data?.name, email: data?.email },
                {
                  "Content-Type": "application/json",
                }
              )
              .then((data) => {
                if (data.data.insertedId) {
                  Swal.fire({
                    icon: "success",
                    title: "Ya!..",
                    text: `Sign up successful.`,
                  }),
                    navigate("/");
                }
              });
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "OOps!..",
              text: `Sign up failed.`,
            });
          });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "OOps!..",
          text: `Sign up failed. Use a new email.`,
        });
      });
  };

   const handleHide = () => {
    setEye(!eye);
  };

  const handleGoogleLogin = () => {
    LoginWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        axios.post(`${webUrl}/users`, { name: loggedUser?.displayName, email: loggedUser?.email })
        .then(() => {
          Swal.fire({
            icon: "success",
            title: "Ya!..",
            text: `Sign in successfully with google.`
          }),
            navigate("/dashboard");
        });
      })
      .catch((err)=>{
        Swal.fire({
          icon: "error",
          title: "Oops!..",
          text: `Sign in problem with google.`
        })
      })
     
  };

  return (
   
        
        <section className="h-screen mt-52 md:mt-24 text-white">
          <div className="relative h-full w-full">
            <img
              alt="Welcome"
              src="https://i.ibb.co/fpmb7fD/pexels-turkan-bakirli-16999360.jpg"
              className="absolute inset-0 h-full w-full object-cover "
            />
            <div className="absolute h-full w-full flex items-center justify-center">
              <div className="px-4 py-12 sm:px-6 sm:py-16 w-full md:w-1/2 lg:px-8 lg:py-24 backdrop-blur-md bg-white/10 border mx-8 md:mx-0">
                <div className="mx-auto max-w-lg text-center pb-6">
                  <h1 className="text-3xl font-bold text-white sm:text-3xl uppercase">
                    Register
                  </h1>
                </div>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="mx-auto mb-0 mt-8 max-w-md space-y-4"
                >
                  <div>
                    <label className="sr-only">Name</label>
                    <div className="relative">
                      <input
                        {...register("name")}
                        type="text"
                        required
                        className="w-full rounded-lg border-gray-200 text-white p-4 pe-12 text-base font-medium shadow-sm"
                        placeholder="enter your name"
                      />
                      {errors?.name && (
                        <span className="text-red-500 font-light">
                          Name is required.
                        </span>
                      )}
                      
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <div className="relative">
                      <input
                        {...register("email")}
                        type="email"
                        required
                        className="w-full rounded-lg border-gray-200 text-white p-4 pe-12 text-base font-medium shadow-sm"
                        placeholder="Enter email"
                      />
                      {errors?.email && (
                        <span className="text-red-500 font-light">
                          Email field is required
                        </span>
                      )}
                      
                    </div>
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        {...register("password", {
                          pattern: /^(?=.*[A-Z])(?=.*[@#$%^&+=])(?=.{6,})/,
                        })}
                         type={eye ? "password" : "text"}
                        required
                        className="w-full rounded-lg border-gray-200 text-white p-4 pe-12 text-base font-medium shadow-sm"
                        placeholder="Enter password"
                      />
                      {errors?.password && (
                        <span className="text-red-500 font-light">
                          The password should not less than 6 characters. Use at
                          least one capital letter and special character.
                        </span>
                      )}
                      <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                        <svg
                           onClick={handleHide}
                          className="h-4 w-4 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        required
                        {...register("confirm_password")}
                        className="w-full rounded-lg border-gray-200 text-white p-4 pe-12 text-base font-medium shadow-sm"
                        placeholder="Type password again"
                      />
                      {errors?.confirm_password && (
                        <span className="text-red-500 font-light">
                          Confirm Password field is required
                        </span>
                      )}
                      
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Photo Url
                    </label>
                    <div className="relative">
                      <input
                        {...register("photoURL")}
                        type="url"
                        required
                        className="w-full rounded-lg border-gray-200 text-white p-4 pe-12 text-base font-medium shadow-sm"
                        placeholder="Enter photo url"
                      />
                      {errors?.photoURL && (
                        <span className="text-red-500 font-light">
                          This field is required too
                        </span>
                      )}
                      
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-3">
                    <p className="text-base font-medium text-gray-200">
                      Have Account?
                      <a className="underline ml-3" href="/login">
                        Sign In
                      </a>
                    </p>
                    <input
                      type="submit"
                      className="bg-custom text-base font-medium text-white cursor-pointer hover:scale-105 px-3 py-2 transition-all"
                      value="Sign Up"
                    />
                  </div>
                </form>
                 <p className="text-center my-8">-OR-</p>
                                           <div
                                onClick={handleGoogleLogin}
                                className="cursor-pointer bg-black w-3/5 p-5 flex items-center justify-center mb-7 mx-auto"
                                           >
                                <div className="mx-auto">
                                  <FaGoogle fill="white" />
                                </div>
                                           </div>
              </div>
            </div>
          </div>
        </section>
     
  );
};

export default Register;
