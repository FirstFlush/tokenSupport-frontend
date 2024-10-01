// import React, { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';


// interface LayoutProps {
//   children: ReactNode;
// }

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <Navbar />
      </header>
      <div className="body">
        <main className="container w-100vw mx-auto flex-grow py-4 px-2 sm:px-4">
          <Outlet />
        </main>
      </div>
      {/* <footer> */}
        <Footer />
      {/* </footer> */}
    </div>
  );
};

export default Layout;
