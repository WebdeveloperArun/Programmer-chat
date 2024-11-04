
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
 const [showPassword, setShowPassword] = useState(false);
 const [formData, setFormData] = useState({
  email: "",
  password: "",
 });

 const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  // Handle form submission here
  console.log("Form submitted:", formData);
 };

 return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
   <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-2xl">
    <div className="text-center">
     <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
      Log in to your account
     </h2>
     <p className="mt-2 text-sm text-gray-600">
      Welcome back! Please enter your details
     </p>
    </div>
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
     <div className="space-y-4">
      <div>
       <label htmlFor="email" className="sr-only">
        Email address
       </label>
       <input
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        required
        className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
        placeholder="Email address"
        value={formData.email}
        onChange={handleInputChange}
       />
      </div>
      <div className="relative">
       <label htmlFor="password" className="sr-only">
        Password
       </label>
       <input
        id="password"
        name="password"
        type={showPassword ? "text" : "password"}
        autoComplete="current-password"
        required
        className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
        placeholder="Password"
        value={formData.password}
        onChange={handleInputChange}
       />
       <button
        type="button"
        className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
        onClick={() => setShowPassword(!showPassword)}
       >
        {showPassword ? (
         <svg
          className="h-4 w-4 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
         >
          <path
           strokeLinecap="round"
           strokeLinejoin="round"
           strokeWidth={2}
           d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10a9.956 9.956 0 012.125-6.825M9.88 9.88l4.24 4.24M14.12 14.12l4.24 4.24"
          />
         </svg>
        ) : (
         <svg
          className="h-4 w-4 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
         >
          <path
           strokeLinecap="round"
           strokeLinejoin="round"
           strokeWidth={2}
           d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
           strokeLinecap="round"
           strokeLinejoin="round"
           strokeWidth={2}
           d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.478 0-8.268-2.943-9.542-7z"
          />
         </svg>
        )}
       </button>
      </div>
     </div>

     <div className="flex items-center justify-between">
      <div className="flex items-center">
       <input
        id="remember-me"
        name="remember-me"
        type="checkbox"
        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
       />
       <label
        htmlFor="remember-me"
        className="ml-2 block text-sm text-gray-900"
       >
        Remember me
       </label>
      </div>

      <div className="text-sm">
       <Link
        href="/forgot-password"
        className="font-medium text-primary hover:text-primary/80"
       >
        Forgot your password?
       </Link>
      </div>
     </div>

     <div>
      <button
       type="submit"
       className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
      >
       <span className="absolute left-0 inset-y-0 flex items-center pl-3">
        <svg
         className="h-5 w-5 text-primary-foreground group-hover:text-primary-foreground/80"
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         stroke="currentColor"
         aria-hidden="true"
        >
         <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8l4 4m0 0l-4 4m4-4H3"
         />
        </svg>
       </span>
       Log in
      </button>
     </div>
    </form>

    <div className="mt-6">
     <div className="relative">
      <div className="absolute inset-0 flex items-center">
       <div className="w-full border-t border-gray-300"></div>
      </div>
      <div className="relative flex justify-center text-sm">
       <span className="px-2 bg-white text-gray-600">Or continue with</span>
      </div>
     </div>

     <div className="mt-6">
      <button className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
       <svg
        className="w-5 h-5 mr-2"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
       >
        <path
         d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
         fill="#4285F4"
        />
        <path
         d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
         fill="#34A853"
        />
        <path
         d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
         fill="#FBBC05"
        />
        <path
         d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
         fill="#EA4335"
        />
       </svg>
       <span>Continue with Google</span>
      </button>
     </div>
    </div>
    <div className="mt-6 text-center">
     <p className="text-sm text-gray-600">
      Don't have an account?{" "}
      <Link
       to="/signup"
       className="font-medium text-primary hover:text-primary/80"
      >
       Sign up
      </Link>
     </p>
    </div>
   </div>
  </div>
 );
}
