// import React from "react";
// import { useNavigate } from "react-router-dom";

// export const Navbar = () => {
//   const token = localStorage.getItem("token");
//   const userImage = localStorage.getItem("userImage");

//   console.log("Token in Navbar:", token);
//   console.log("User Image in Navbar:", userImage);

//   const navigate = useNavigate();

//   function logoutHandler() {
//     localStorage.removeItem("token");
//     localStorage.removeItem("userImage");

//     navigate("/");
//   }

//   return (
//     <nav className="bg-[#F8F8F8] dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
//         <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
//           <img src="preppp.jpg" className="w-32" alt="Flowbite Logo" />
//         </a>
//         <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//           {!token ? (
//             <>
//               <a href="/signUp" className="mr-4">
//                 <button type="button" className="btn-outline">
//                   SignUp
//                 </button>
//               </a>
//               <a href="/login">
//                 <button type="button" className="nav-btn">
//                   Login
//                 </button>
//               </a>
//             </>
//           ) : (
//             <>
//               <div className="flex gap-4">
//                 <div>
//                   <img
//                     className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 gap-3 object-cover"
//                     src={userImage || "/default-avatar.png"}  // Default avatar added
//                     alt="User Avatar"
//                   />
//                 </div>

//                 <button
//                   type="button"
//                   onClick={logoutHandler}
//                   className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                 >
//                   Logout
//                 </button>
//               </div>
//             </>
//           )}
//         </div>

//         <div
//           className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
//           id="navbar-sticky"
//         >
//           <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
//             <li>
//               <a href="/" className="block py-2 px-3 text-gray-900 rounded">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="/interviewType" className="block py-2 px-3 text-gray-900">
//                 Dashboard
//               </a>
//             </li>
//             <li>
//               <a href="/userdashboard" className="block py-2 px-3 text-gray-900 rounded">
//                 User Dashboard
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };


import React from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const token = localStorage.getItem("token");
  const userImage = localStorage.getItem("userImage");
  const navigate = useNavigate();

  function logoutHandler() {
    localStorage.removeItem("token");
    localStorage.removeItem("userImage");
    navigate("/");
  }

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 shadow-md border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto py-3 px-4">
        <a href="/" className="flex items-center space-x-2">
          <img src="preppp.jpg" className="w-28 object-cover" alt="Logo" />
        </a>

        <div className="hidden md:flex gap-8 font-medium">
          <a href="/" className="hover:text-[#FCA311] transition duration-300">
            Home
          </a>
          <a href="/interviewType" className="hover:text-[#FCA311] transition duration-300">
            Dashboard
          </a>
          <a href="/userdashboard" className="hover:text-[#FCA311] transition duration-300">
            User Dashboard
          </a>
        </div>

        <div className="flex items-center gap-4">
            {!token ? (
              <>
                <button
                  onClick={() => navigate("/signUp")}
                  className="text-black hover:bg-[#FCA311] hover:text-white px-4 py-1 rounded transition duration-300 font-medium"
                >
                  SignUp
                </button>
                <button
                  onClick={() => navigate("/login")}
                  className="text-black hover:bg-[#FCA311] hover:text-white px-4 py-1 rounded transition duration-300 font-medium"
                >
                  Login
                </button>
              </>
            ) : (
              <>
                {/* <img
                  src={userImage || "/default-avatar.png"}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full border-2 border-gray-300 object-cover"
                /> */}
                <button
                  onClick={logoutHandler}
                  className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700 transition duration-300 font-bold"
                >
                  Logout
                </button>
              </>
            )}

        </div>
      </div>
    </nav>
  );
};
