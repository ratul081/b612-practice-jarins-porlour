import React from "react";
import { useForm } from "react-hook-form";
import { BsFacebook } from "react-icons/bs";

const SingUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    validate,
    reset,
    getValues,
  } = useForm();
  const onSubmit = (data) => console.log("click", data);
  console.log("error", errors);
  return (
    <div className="flex flex-col mx-96 justify-center mt-4">
      <form onSubmit={handleSubmit(onSubmit)} className="p-12 border rounded">
        <div>
          <h1 className="text-2xl font-semibold">Create an account</h1>
        </div>
        <div className="py-8 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
          <div className="mt-6">
            <div className="relative">
              <input
                {...register("firstName", {
                  required: "Please enter your first name",
                })}
                type="text"
                className="peer placeholder-transparent mt-3 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                placeholder="Email address"
              />
              <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:font-semibold  peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-black peer-focus:semibold peer-focus:text-sm cursor-text">
                First Name
              </label>
            {errors.firstName && (
              <span className="text-red-500 text-sm">
                {errors.firstName.message}
              </span>
            )}
            </div>
          </div>
          <div className="mt-6">
            <div className="relative">
              <input
                type="text"
                {...register("lastName", {
                  required: "Please enter your last name",
                })}
                className="peer placeholder-transparent mt-3 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                placeholder=""
              />
              <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:font-semibold  peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-black peer-focus:semibold peer-focus:text-sm cursor-text">
                Last Name
              </label>
            </div>
            {errors.email && (
              <span className="text-red-500 text-sm mt-2">{`${errors.email.message}`}</span>
            )}
          </div>
          <div className="mt-6">
            <div className="relative">
              <input
                {...register("email", {
                  required: "Please enter your email",
                  pattern: /^\S+@\S+$/i,
                })}
                type="email"
                className="peer placeholder-transparent mt-3 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                placeholder=""
              />
              <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:font-semibold  peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-black peer-focus:semibold peer-focus:text-sm cursor-text">
                Username or Email
              </label>
            </div>
            {errors.email && (
              <span className="text-red-500 text-sm mt-2">{`${errors.email.message}`}</span>
            )}
          </div>
          <div className="mt-6">
            <div className="relative">
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 10 characters",
                  },
                })}
                type="password"
                className="peer placeholder-transparent mt-3 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                placeholder=""
              />
              <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:font-semibold  peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-black peer-focus:semibold peer-focus:text-sm cursor-text">
                Password
              </label>
              {errors.password && (
                <span className="text-red-500 text-sm mt-2">{`${errors.password.message}`}</span>
              )}
            </div>
          </div>
          <div className="mt-6">
            <div className="relative">
              <input
                {...register("passwordConfirmation", {
                  validate: (value) =>
                    value === getValues("password") || "Passwords must match",
                  required: validate ? "" : "Passwords must match",
                })}
                type="password"
                className="peer placeholder-transparent mt-3 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                placeholder="Confirm Password"
              />
              <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:font-semibold  peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-black peer-focus:semibold peer-focus:text-sm cursor-text">
                Confirm Password
              </label>
            </div>
            {errors.passwordConfirmation && (
              <span className="text-red-500 text-sm mt-2">{`${errors.passwordConfirmation.message}`}</span>
            )}
          </div>
        </div>
        <input
          type="submit"
          className="w-full btn btn-primary normal-case"
          value="Create account"
        />
      </form>
      <div className="flex flex-col items-center">
        <button className="flex items-center justify-center mt-8 transition-colors duration-300 transform border rounded-full">
          <div className="px-4 py-2">
            <BsFacebook className="w-9 h-9 text-blue-800" />
          </div>

          <p className="w-5/6 me-20 ms-12 px-10   py-3 font-bold text-center">
            Continue with Facebook
          </p>
        </button>
        <div className="divider">OR</div>
        <button className="flex items-center justify-center mb-4 transition-colors duration-300 transform border rounded-full">
          <div className="px-4 py-2">
            <svg className="w-9 h-9" viewBox="0 0 40 40">
              <path
                d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                fill="#FFC107"
              />
              <path
                d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                fill="#FF3D00"
              />
              <path
                d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                fill="#4CAF50"
              />
              <path
                d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                fill="#1976D2"
              />
            </svg>
          </div>

          <p className="w-5/6 me-20 ms-12 px-10   py-3 font-bold text-center">
            Continue with Google
          </p>
        </button>
      </div>
    </div>
  );
};

export default SingUp;
