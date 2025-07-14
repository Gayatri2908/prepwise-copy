// // import React from "react";
// // import { FaCheckCircle } from 'react-icons/fa';
// // import Container from "../container/Container";

// // export const Hero = () => {
// //   return (
// //     <Container>
// //       <div className=" flex justify-center bg-#fffff text-white p-16 gap-64">
// //         <div className=" flex justify-center container mx-auto w-[70%] border border solid">
// //           <img src="heroimg.jpeg" alt="" className="w-[100%]" />
// //         </div>
// //         <div className="container mx-auto">
// //           <div className="text-left">
// //             <h3 className="text-2xl text-[#1F2041] font-bold leading-8 font-sans">
// //               Roadmaps
// //             </h3>

// //             <p className="pt-4 text-[#000000a3] font-normal text-base leading-6 font-serif">
// //               Explore the guided learning path for different roles <br />
// //               or skills thatyou want to learn, revise, or test your expertise
// //               for.
// //             </p>
// //             <div className="pt-4">
// //               {/* <span className="">
// //                 <TiTick className="bg-[#000000a3]" />
// //               </span> */}
// //               <p className=" text-[#000000a3] font-normal text-base leading-6 font-serif hero-p">
// //                 Tailored learning path with interviews to help you succeed.
// //               </p>
// //               <p className=" text-[#000000a3] font-normal text-base leading-6 font-serif hero-p">
// //                 Learning materials to help you ace your interview prep.
// //               </p>
// //               <p className=" text-[#000000a3] font-normal text-base leading-6 font-serif hero-p">
// //                 Track your progress
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </Container>
// //   );
// // };
// import React from "react";
// import { FaCheckCircle } from 'react-icons/fa';
// import Container from "../container/Container";

// export const Hero = () => {
//   return (
//     <Container>
//       <div className="flex justify-center bg-[#ffffff] text-black p-16 gap-64">
//         <div className="flex justify-center container mx-auto w-[70%] border border-solid">
//           <img src="heroimg.jpeg" alt="" className="w-[100%]" />
//         </div>
//         <div className="container mx-auto">
//           <div className="text-left">
//             <h3 className="text-2xl text-[#1F2041] font-bold leading-8 font-sans">
//               Roadmaps
//             </h3>

//             <p className="pt-4 text-[#000000a3] font-normal text-base leading-6 font-serif">
//               Explore the guided learning path for different roles <br />
//               or skills that you want to learn, revise, or test your expertise for.
//             </p>

//             <div className="pt-4">
//               <ul className="text-[#000000a3] font-normal text-base leading-6 font-serif space-y-2">
//                 <li className="flex items-center">
//                   <FaCheckCircle className="text-yellow-400 mr-2" />
//                   Tailored learning path with interviews to help you succeed.
//                 </li>
//                 <li className="flex items-center">
//                   <FaCheckCircle className="text-yellow-400 mr-2" />
//                   Learning materials to help you ace your interview prep.
//                 </li>
//                 <li className="flex items-center">
//                   <FaCheckCircle className="text-yellow-400 mr-2" />
//                   Track your progress
//                 </li>
//               </ul>
//             </div>

//           </div>
//         </div>
//       </div>
//     </Container>
//   );
// };


import React from "react";
import { FaCheckCircle } from 'react-icons/fa';
import Container from "../container/Container";

export const Hero = () => {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row items-center text-black p-10 lg:p-16 gap-12 lg:gap-24">

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="heroimg.jpeg"
            alt="Hero"
            className="w-full rounded-md shadow-md object-cover"
          />
        </div>

        {/* Roadmaps Box Section */}
        <div className="w-full lg:w-1/2">
          <div className="bg-white shadow-md border border-[#eee] rounded-lg p-6">
            <h3 className="text-2xl text-[#1F2041] font-bold leading-8 font-sans mb-4">
              Roadmaps
            </h3>

            {/* Justified Paragraph */}
            <p className="text-[#000000a3] font-normal text-sm leading-6 font-serif mb-4 text-justify">
              Explore the guided learning path for different roles or skills that you want to learn, revise, or test your expertise for.
            </p>

            {/* Checklist with Icons and Justified Text */}
            <ul className="space-y-4 text-[#000000a3] font-normal text-sm leading-6 font-serif">
              <li className="flex items-center gap-2">
                <FaCheckCircle size={16} className="flex-shrink-0 text-[#FCA311]" />
                <span className="text-justify">
                  Tailored learning path with interviews to help you succeed.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle size={16} className="flex-shrink-0 text-[#FCA311]" />
                <span className="text-justify">
                  Learning materials to help you ace your interview prep.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle size={16} className="flex-shrink-0 text-[#FCA311]" />
                <span className="text-justify">
                  Track your progress.
                </span>
              </li>
            </ul>
          </div>
        </div>
        
      </div>
    </Container>
  );
};
