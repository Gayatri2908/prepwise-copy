// import { CiLinkedin } from "react-icons/ci";
// import { FaInstagram } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa6";
// import Container from "./container/Container";

// const Footer = () => {
//   return (
//     <footer className="bg-[#101010] text-white py-4  ">
//       <Container>
//         <div className="flex gap-x-64">
//           <div className=" border-red w-1/2 ">
//             <div></div>
//             <div className=" border-yellow w-1/2 text-left m-4">
//               <p className="cursor-pointer">
//                 Experience the future of interview preparation. Bid farewell to
//                 outdated methods and embrace a smart, effective approach to
//                 interview preparations.
//               </p>
//             </div>
//             <div className="flex align-left">
//               <div
//                 className="rounded-full my-3 mx-3 icon border border-solid flex items-center justify-center cursor-pointer"
//                 style={{ width: "40px", height: "40px", borderRadius: "20px" }}
//               >
//                 <CiLinkedin />
//               </div>
//               <div
//                 className="rounded-full my-3 mx-3 icon border border-solid flex items-center justify-center cursor-pointer"
//                 style={{ width: "40px", height: "40px", borderRadius: "20px" }}
//               >
//                 <FaInstagram />
//               </div>
//               <div
//                 className="rounded-full my-3 mx-3 icon border border-solid flex items-center justify-center cursor-pointer"
//                 style={{ width: "40px", height: "40px", borderRadius: "20px" }}
//               >
//                 <FaYoutube />
//               </div>
//             </div>
//           </div>
//           <div className="flex gap-x-8 ">
//             <div className="text-left mb-3 leading-5 cursor-pointer">
//               <p className="footer-font text-accent">COMPANY</p>
//               <p className="footer-inner-font">For Businesses</p>
//               <p className="footer-inner-font">About Us</p>
//               <p className="footer-inner-font">Pricing</p>
//               <p className="footer-inner-font">Product Demo</p>
//             </div>
//             <div className="text-left leading-5 cursor-pointer">
//               <p className="footer-font text-accent">SUPPORT</p>
//               <p className="footer-inner-font">Contact Us</p>
//               <p className="footer-inner-font">FAQs</p>
//             </div>
//             <div className="text-left leading-5 cursor-pointer">
//               <p className="footer-font text-accent">LEGAL</p>
//               <p className="footer-inner-font">Terms & Conditions</p>
//               <p className="footer-inner-font">Privacy Policy</p>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;


import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import Container from "./container/Container";

const Footer = () => {
  return (
    <footer className="bg-[#002147] text-white py-6 text-sm">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          
          {/* Left Section with Centered Icons */}
          <div className="max-w-md flex flex-col items-center text-center md:items-start md:text-left">
            <p className="mb-4 leading-5">
              Experience the future of interview prep with smart tool prepwise.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="border border-white p-2 rounded-full hover:bg-white hover:text-black transition">
                <CiLinkedin size={20} />
              </a>
              <a href="#" className="border border-white p-2 rounded-full hover:bg-white hover:text-black transition">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="border border-white p-2 rounded-full hover:bg-white hover:text-black transition">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Right Section with Clickable Text */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-left">
            
            {/* COMPANY */}
            <div>
              <p className="text-[#FCA311] font-semibold mb-2">COMPANY</p>
              <a href="/about" className="block footer-inner-font text-gray-300 hover:text-white hover:underline transition">
                About Us
              </a>
              <a href="/pricing" className="block footer-inner-font text-gray-300 hover:text-white hover:underline transition">
                Pricing
              </a>
              <a href="/demo" className="block footer-inner-font text-gray-300 hover:text-white hover:underline transition">
                Product Demo
              </a>
            </div>

            {/* SUPPORT */}
            <div>
              <p className="text-[#FCA311] font-semibold mb-2">SUPPORT</p>
              <a href="/contact" className="block footer-inner-font text-gray-300 hover:text-white hover:underline transition">
                Contact Us
              </a>
              <a href="/faqs" className="block footer-inner-font text-gray-300 hover:text-white hover:underline transition">
                FAQs
              </a>
            </div>

            {/* LEGAL */}
            <div>
              <p className="text-accent font-semibold mb-2">LEGAL</p>
              <a href="/terms" className="block footer-inner-font text-gray-300 hover:text-white hover:underline transition">
                Terms & Conditions
              </a>
              <a href="/privacy" className="block footer-inner-font text-gray-300 hover:text-white hover:underline transition">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
