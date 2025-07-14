// import React from "react";
// import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
// import { LuMessagesSquare } from "react-icons/lu";
// import { PiDesktopTowerDuotone } from "react-icons/pi";
// import { FaRegStar } from "react-icons/fa";
// import Container from "../container/Container";

// export const MiddleSection = () => {
//   return (
//     <Container>
//       <div className="pb-7">
//         <p className="bottom-p1">Tailored solution to make you</p>
//         <p className="pb-10 bottom-p1">Interview Ready</p>
//         <div className="flex gap-1 justify-evenly ">
//           <div className="dark border border-solid cursor-pointer">
//             <div className="border border-solid w-14 h-14  Icon">
//               <HiOutlineQuestionMarkCircle
//                 className="w-12 h-12"
//                 style={{ color: "#f9d663" }}
//               />
//             </div>
//             <p className="text-left pt-2 style-p-tag">
//               Tailored interview questions
//             </p>
//             <p className="text-left style-p-tag">
//               Receive customised interview and follow-up questions aligned with
//               the skills or role you’re practicing for.
//             </p>
//           </div>
//           <div className="dark border border-solid cursor-pointer ">
//             <div className="border border-solid w-14 h-14  Icon">
//               <LuMessagesSquare
//                 className="w-12 h-12"
//                 style={{ color: "#f9d663" }}
//               />
//             </div>
//             <p className="text-left pt-2 style-p-tag">Interactive interviews</p>
//             <p className="text-left style-p-tag">
//               Experience realistic and dynamic interview sessions , that adapts
//               to your responses.
//             </p>
//           </div>
//           <div className="dark border border-solid cursor-pointer">
//             <div className="border border-solid w-14 h-14  Icon">
//               <FaRegStar className="w-12 h-12" style={{ color: "#f9d663" }} />
//             </div>
//             <p className="text-left pt-2 style-p-tag">Comprehensive Feedback</p>
//             <p className="text-left style-p-tag">
//               Gain insights on your interview performance, get tailored
//               suggestions to enhance your interview skills.
//             </p>
//           </div>
//           <div className="dark border border-solid cursor-pointer">
//             <div className="border border-solid w-14 h-14  Icon">
//               <PiDesktopTowerDuotone
//                 className="w-12 h-12"
//                 style={{ color: "#f9d663" }}
//               />
//             </div>
//             <p className="text-left pt-2 style-p-tag">
//               Practice anytime, anywhere
//             </p>
//             <p className="text-left style-p-tag">
//               Receive customised interview and follow-up questions aligned with
//               the skills or role you’re practicing for.
//             </p>
//           </div>
//         </div>
//       </div>
//     </Container>
//   );
// };



import React from "react";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { LuMessagesSquare } from "react-icons/lu";
import { PiDesktopTowerDuotone } from "react-icons/pi";
import { FaRegStar } from "react-icons/fa";
import Container from "../container/Container";

export const MiddleSection = () => {
  return (
    <Container>
      <div className="pb-7">
        <p className="bottom-p1">Tailored solution to make you</p>
        <p className="pb-10 bottom-p1">Interview Ready</p>

        <div className="flex flex-wrap justify-center gap-6">
          {/* Single Box Start */}
          <div className="bg-white shadow-md rounded-lg p-5 max-w-xs border border-[#eee] cursor-pointer">
            <div className="flex items-center justify-center w-14 h-14 bg-[#FFF6E5] rounded-md mb-3">
              <HiOutlineQuestionMarkCircle className="w-8 h-8 text-[#f9d663]" />
            </div>
            <p className="font-semibold text-left mb-2">Tailored interview questions</p>
            <p className="text-left text-sm text-gray-700">
              Receive customised interview and follow-up questions aligned with
              the skills or role you’re practicing for.
            </p>
          </div>

          {/* Box 2 */}
          <div className="bg-white shadow-md rounded-lg p-5 max-w-xs border border-[#eee] cursor-pointer">
            <div className="flex items-center justify-center w-14 h-14 bg-[#FFF6E5] rounded-md mb-3">
              <LuMessagesSquare className="w-8 h-8 text-[#f9d663]" />
            </div>
            <p className="font-semibold text-left mb-2">Interactive interviews</p>
            <p className="text-left text-sm text-gray-700">
              Experience realistic and dynamic interview sessions that adapt to your responses.
            </p>
          </div>

          {/* Box 3 */}
          <div className="bg-white shadow-md rounded-lg p-5 max-w-xs border border-[#eee] cursor-pointer">
            <div className="flex items-center justify-center w-14 h-14 bg-[#FFF6E5] rounded-md mb-3">
              <FaRegStar className="w-8 h-8 text-[#f9d663]" />
            </div>
            <p className="font-semibold text-left mb-2">Comprehensive Feedback</p>
            <p className="text-left text-sm text-gray-700">
              Gain insights on your interview performance, get tailored
              suggestions to enhance your interview skills.
            </p>
          </div>

          {/* Box 4 */}
          <div className="bg-white shadow-md rounded-lg p-5 max-w-xs border border-[#eee] cursor-pointer">
            <div className="flex items-center justify-center w-14 h-14 bg-[#FFF6E5] rounded-md mb-3">
              <PiDesktopTowerDuotone className="w-8 h-8 text-[#f9d663]" />
            </div>
            <p className="font-semibold text-left mb-2">Practice anytime, anywhere</p>
            <p className="text-left text-sm text-gray-700">
              Receive customised interview and follow-up questions aligned with
              the skills or role you’re practicing for.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};
