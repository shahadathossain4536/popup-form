"use client"
// components/PopupForm.tsx

import { useForm, SubmitHandler } from 'react-hook-form';

type FormValues = {
  name: string;
  email: string;
  phoneNumber: string;
  consent: boolean;
};

const PopupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await fetch('/api/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.status === 200) {
        // Form submitted successfully
        // Handle success behavior (e.g., close the popup)
      } else {
        const responseData = await response.json();
        // Handle errors and display them to the user
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg  shadow-2xl shadow-gray-950">
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <label htmlFor="name" className="block  font-light text-xl mb-1 text-black">
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register('name', { required: true })}
            placeholder="Enter your name"
            className={`w-full border rounded-md p-2 text-black bg-slate-100 ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">Name is required</p>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block font-light text-xl mb-1 text-black">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register('email', { required: true })}
            placeholder="Enter your email"
            className={`w-full border rounded-md p-2 text-black  bg-slate-100 ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">Email is required</p>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="phoneNumber" className="block font-light text-xl mb-1 text-black">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            {...register('phoneNumber', { required: true })}
            placeholder="Enter your phone number"
            className={`w-full border rounded-md p-2 text-black bg-slate-100 ${
              errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm">Phone number is required</p>
          )}
        </div>
        <div className="mb-4">
          {/* <label htmlFor="consent" className="block font-semibold mb-1">
            Notice and Consent
          </label> */}
          <input
            type="checkbox"
            id="consent"
            {...register('consent', { required: true })}
            className={`mr-2 ${
              errors.consent ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          <span className='text-black'>I agree to the terms and conditions.</span>
          {errors.consent && (
            <p className="text-red-500 text-sm">Consent is required</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white text-lg py-2 px-4  rounded-md hover:bg-blue-600 w-full mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PopupForm;
