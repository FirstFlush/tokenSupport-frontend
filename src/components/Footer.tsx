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
            <p className="text-headerText">
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
            <p className="text-headerText mb-2">Email: <a href="mailto:support@tokensupport.com" className="text-highlight">support@{COMPANY_DOMAIN}</a></p>
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
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="currentColor"/>
                <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="currentColor"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="currentColor"/>
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