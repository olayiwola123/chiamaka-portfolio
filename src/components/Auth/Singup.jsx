// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { Link, Navigate } from 'react-router-dom';
// import toast from 'react-hot-toast';
// import sideImage from '../../assets/about.png';

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (formData.password !== formData.confirmPassword) {
//       setError("Passwords do not match");
//       toast.error("Passwords do not match");
//       return;
//     }

//     // Additional validation checks...

//     try {
//       setLoading(true);
    
      // const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/register`, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });
//       const data = await response.json();

//       if (data.error) {
//         setError(data.message);
//         toast.error(data.message);
//       } else {
       
//         toast.success("Registration successful!");
        
        
//         setFormData({ name: '', email: '', password: '', confirmPassword: '' });
       
//       }
//     } catch (err) {
//       console.error(err);
      
//       toast.error("Registration failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="min-h-screen flex bg-gray-100">
    
//       <motion.div
//         className="hidden lg:flex lg:w-1/2 h-full bg-cover bg-center"
//         style={{ backgroundImage: `url(${sideImage})` }}
//         animate={{ y: [0, 5, 0] }}
//         transition={{ duration: 2, repeat: Infinity }}
//       />
      
     
//       <div className="flex items-center justify-center w-full lg:w-1/2 p-10">
//         <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
//           <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Create Your Account</h2>
//           {error && <p className="text-red-500 text-center mb-4">{error}</p>}
//           {success && <p className="text-green-500 text-center mb-4">{success}</p>}
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label className="block text-gray-700">Full Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full p-3 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full p-3 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//                 required
//               />
//             </div>
//             <div className="mb-4 relative">
//               <label className="block text-gray-700">Password</label>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full p-3 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//                 required
//               />
//               <span className="absolute right-3 top-10 cursor-pointer" onClick={togglePasswordVisibility}>
//                 {showPassword ? <FaEyeSlash /> : <FaEye />}
//               </span>
//             </div>
//             <div className="mb-4 relative">
//               <label className="block text-gray-700">Confirm Password</label>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="confirmPassword"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 className="w-full p-3 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//                 required
//               />
//               <span className="absolute right-3 top-10 cursor-pointer" onClick={togglePasswordVisibility}>
//                 {showPassword ? <FaEyeSlash /> : <FaEye />}
//               </span>
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white p-3 rounded mt-4 hover:bg-blue-600 transition duration-300 shadow"
//               disabled={loading}
//             >
//               {loading ? "Registering..." : "Register"}
//             </button>
//           </form>
//           <div className="mt-6 text-center">
//             <p className="text-gray-700">
//               Already have an account?{' '}
//               <Link to="/login" className="text-blue-500 font-bold hover:underline">Log in</Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signup;
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        phone_number: '',
        address: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success('Registration successful!', {
                    position: 'top-center',
                    duration: 3000,
                });
            } else {
                toast.error('Registration failed. Please try again.', {
                    position: 'top-center',
                    duration: 3000,
                });
            }
        } catch (error) {
            toast.error('An error occurred. Please try again.', {
                position: 'top-center',
                duration: 3000,
            });
            console.error('Error during registration:', error);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <Toaster />

            {/* Signup Form & Image Section */}
            <div className="flex flex-col lg:flex-row w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden animate__animated animate__fadeIn">
                
                {/* Left Side: Image */}
                <div className="w-full lg:w-1/2 hidden lg:block">
                    <img
                        src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a"
                        alt="Signup"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right Side: Form */}
                <div className="w-full lg:w-1/2 p-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                        Create Your Account
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                            <input
                                type="password"
                                name="password_confirmation"
                                value={formData.password_confirmation}
                                onChange={handleChange}
                                required
                                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                            <input
                                type="text"
                                name="phone_number"
                                value={formData.phone_number}
                                onChange={handleChange}
                                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Address</label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
