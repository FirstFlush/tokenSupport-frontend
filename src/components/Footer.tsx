import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_NAME, COMPANY_DOMAIN } from '../utils/constants';


const Footer: React.FC = () => {
  return (
    <footer className="bg-header text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
          
          {/* Left Section: Company Info */}
          <div className="flex-1 pr-4">
            <h2 className="text-2xl font-bold mb-4">{COMPANY_NAME}</h2>
            <p className="text-gray-400">
              Empowering fundraisers through decentralized finance. All transactions are executed securely and efficiently on the Polygon network.
            </p>
          </div>

          {/* Middle Section: Quick Links */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/causes" className="hover:text-highlight transition-colors">Causes</Link></li>
              <li><Link to="/fundraise" className="hover:text-highlight transition-colors">Start Fundraising</Link></li>
              <li><Link to="/about" className="hover:text-highlight transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-highlight transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Right Section: Contact Info and Social Media */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-2">Email: <a href="mailto:support@tokensupport.com" className="text-highlight">support@{COMPANY_DOMAIN}</a></p>
            {/* <p className="text-gray-400 mb-4">Phone: +1 (555) 555-5555</p> */}
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              <a href="https://twitter.com" className="hover:text-highlight">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6.03c-.77.34-1.6.57-2.46.68a4.26 4.26 0 001.86-2.34c-.82.49-1.73.85-2.7 1.04A4.24 4.24 0 0016.08 4c-2.36 0-4.28 1.92-4.28 4.28 0 .34.04.67.1.99-3.56-.18-6.72-1.88-8.84-4.46-.37.64-.59 1.39-.59 2.19 0 1.51.77 2.83 1.94 3.61a4.25 4.25 0 01-1.94-.54v.05c0 2.1 1.49 3.85 3.47 4.25-.36.1-.74.15-1.12.15-.28 0-.54-.03-.8-.07a4.26 4.26 0 003.98 2.96A8.53 8.53 0 012 19.54 12.03 12.03 0 007.29 21c7.75 0 11.98-6.42 11.98-11.98 0-.18 0-.36-.01-.54.82-.6 1.53-1.34 2.1-2.19z" />
                </svg>
              </a>
              <a href="https://facebook.com" className="hover:text-highlight">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.407.593 24 1.324 24h11.495V14.708H9.79v-3.576h3.029V8.412c0-3.007 1.835-4.646 4.516-4.646 1.283 0 2.385.096 2.704.14v3.13h-1.857c-1.456 0-1.737.692-1.737 1.707v2.236h3.47l-.453 3.576h-3.017V24h5.915c.73 0 1.324-.593 1.324-1.324V1.324C24 .593 23.407 0 22.676 0z" />
                </svg>
              </a>
              <a href="https://instagram.com" className="hover:text-highlight">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.75 0h8.5A7.751 7.751 0 0124 7.75v8.5A7.751 7.751 0 0116.25 24h-8.5A7.751 7.751 0 010 16.25v-8.5A7.751 7.751 0 017.75 0zm5.25 5.556a4.444 4.444 0 100 8.888 4.444 4.444 0 000-8.888zm6.222-.222a1.389 1.389 0 100 2.778 1.389 1.389 0 000-2.778zm1.528 3.333a6.528 6.528 0 01-.57 3.056 6.528 6.528 0 01-1.525 2.22 6.528 6.528 0 01-2.22 1.526 6.528 6.528 0 01-3.057.569h-6.444a6.528 6.528 0 01-3.057-.57 6.528 6.528 0 01-2.22-1.525 6.528 6.528 0 01-1.526-2.22 6.528 6.528 0 01-.569-3.057v-6.444a6.528 6.528 0 01.57-3.056 6.528 6.528 0 011.525-2.22 6.528 6.528 0 012.22-1.526 6.528 6.528 0 013.057-.569h6.444a6.528 6.528 0 013.057.57 6.528 6.528 0 012.22 1.525 6.528 6.528 0 011.526 2.22 6.528 6.528 0 01.569 3.057v6.444z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="mt-8 text-center text-gray-500">
          &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;





// import { COMPANY_DOMAIN } from "../utils/constants";


// const Footer: React.FC = () => {

//     return (
//         <div className="bg-primary text-white p-4">
//             <p>&copy; 2024 {COMPANY_DOMAIN}</p>
//         </div>
//     )
// }


// export default Footer;