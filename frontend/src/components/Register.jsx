import React, { useState } from 'react';
import { motion } from 'framer-motion';  // Import from framer-motion
import NavBar from './NavBar';
import Footer from './Footer';
import axios from 'axios';

const Register = () => {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [errorMessages, setErrorMessages] = useState('');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    gender: '',
    programType: '',
    startDate: '',
    agreeToTerms: false,
  });

  const validateFields = () => {
    let newErrors = {};

    if (step === 1) {
      if (!formData.fullName) newErrors.fullName = 'Full Name is required';
      if (!formData.email) newErrors.email = 'Email is required';
    } else if (step === 2) {
      if (!formData.phone) newErrors.phone = 'Phone number is required';
    } else if (step === 3) {
      if (!formData.programType) newErrors.programType = 'Program type is required';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/register', formData);
      alert(response.data.message);  // Handle success message from the backend
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        gender: '',
        programType: '',
        startDate: '',
        agreeToTerms: false,
      });
      setStep(1);  // Reset step to the first one
    } catch (error) {
      if (error.response && error.response.data.message) {
        setErrorMessages(error.response.data.message);  // Display error message from the backend
      } else {
        setErrorMessages('An error occurred. Please try again later.');
      }
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
    setErrors({
      ...errors,
      [name]: '',  // Clear error when the user types
    });
  };

  const handleNextStep = () => {
    const newErrors = validateFields();

    if (Object.keys(newErrors).length === 0) {
      setErrors({});
      setStep(step + 1);
    } else {
      setErrors(newErrors);
    }
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  // Variants for animation
  const stepVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <div className="register-page min-h-screen flex flex-col justify-between bg-black text-darkerGold">
      <NavBar />
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="register-form bg-black border border-darkerGold p-8 shadow-lg rounded-lg w-11/12 lg:w-3/4 xl:w-2/3 2xl:w-3/4">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-darkerGold to-golden text-center mb-8">
            Registration Form
          </h1>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">

            <motion.div
              key={step}  // Important for triggering transitions on step change
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={stepVariants}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {/* Step 1: Full Name & Email */}
              {step === 1 && (
                <>
                  <div>
                    <label className="block text-golden font-medium py-2">Full Name: *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="input w-full p-2 bg-black border border-golden text-golden"
                    />
                    {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-golden font-medium py-2">Email Address: *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="input w-full p-2 bg-black border border-golden text-golden"
                    />
                    {errors.email && <p className="text-red-500">{errors.email}</p>}
                  </div>
                </>
              )}

              {/* Step 2: Phone & Gender */}
              {step === 2 && (
                <>
                  <div>
                    <label className="block text-golden font-medium py-2">Phone Number: *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      required
                      onChange={handleChange}
                      className="input w-full p-2 bg-black border border-golden text-golden"
                    />
                    {errors.phone && <p className="text-red-500">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-golden font-medium py-2">Gender</label>
                    <div className="flex items-center space-x-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="gender"
                          value="male"
                          checked={formData.gender === 'male'}
                          onChange={handleChange}
                          className="form-radio"
                        />
                        <span className="ml-2 text-golden">Male</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="gender"
                          value="female"
                          checked={formData.gender === 'female'}
                          onChange={handleChange}
                          className="form-radio"
                        />
                        <span className="ml-2 text-golden">Female</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="gender"
                          value="others"
                          checked={formData.gender === 'others'}
                          onChange={handleChange}
                          className="form-radio"
                        />
                        <span className="ml-2 text-golden">Others</span>
                      </label>
                    </div>
                    {errors.gender && <p className="text-red-500">{errors.gender}</p>}
                  </div>
                </>
              )}

              {/* Step 3: Program Type & Start Date */}
              {step === 3 && (
                <>
                  <div>
                    <label className="block text-golden font-medium py-2">Program Type: *</label>
                    <select
                      name="programType"
                      value={formData.programType}
                      onChange={handleChange}
                      className="input w-full p-2 bg-black border border-golden text-golden"
                    >
                      <option value="">-- Select Program --</option>
                      <option value="training">Commercial Pilot Training</option>
                      <option value="consulting">Cabin Crew Training</option>
                      <option value="preparation">Cadet Pilot Program Preparation</option>
                      <option value="drone">Drone Flying Training</option>
                      <option value="operations">Airport Operations</option>
                      <option value="undecided">Not Decided yet</option>
                    </select>
                    {errors.programType && <p className="text-red-500">{errors.programType}</p>}
                  </div>

                  <div>
                    <label className="block text-golden font-medium py-2">Start Date:</label>
                    <input
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleChange}
                      className="input w-full p-2 bg-black border border-golden text-golden"
                    />
                    {errors.startDate && <p className="text-red-500">{errors.startDate}</p>}
                  </div>
                </>
              )}

              {/* Step 4: Terms & Conditions */}
              {step === 4 && (
                <>
                  <div className="flex items-start space-x-4">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleChange}
                      className="form-checkbox mt-1"
                    />
                    <label className="text-golden">
                      I agree to the{' '}
                      <a href="#" className="underline">
                        terms and conditions
                      </a>
                    </label>
                  </div>
                  {errors.agreeToTerms && <p className="text-red-500">{errors.agreeToTerms}</p>}

                  <button
                    type="submit"
                    className="py-2 px-6 bg-black text-golden border border-golden rounded-lg hover:bg-golden hover:text-black hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    Submit
                  </button>
                </>
              )}
            </motion.div>
            <div className="col-span-2 flex justify-between mt-4">
              {step > 1 && (
                <button
                  type="button"
                  onClick={handlePreviousStep}
                  className="py-2 px-6 bg-black text-golden border border-golden rounded-lg hover:bg-golden hover:text-black hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Previous
                </button>
              )}
              {step < 4 && (
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="py-2 px-6 bg-black text-golden border border-golden rounded-lg hover:bg-golden hover:text-black hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Next
                </button>
              )}
            </div>
          </form>

          {errorMessages && <div className="text-red-500 mt-4">{errorMessages}</div>}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
