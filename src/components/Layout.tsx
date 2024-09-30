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
      <main className="container mx-auto flex-grow p-4">
        <Outlet />
      </main>
      {/* <footer> */}
        <Footer />
      {/* </footer> */}
    </div>
  );
};

export default Layout;
