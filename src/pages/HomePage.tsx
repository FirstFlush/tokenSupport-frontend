import React from "react";
import { Link } from "react-router-dom";
import { paths } from "../routes/paths";
import HomeSection from "../components/widgets/HomeSection";


const HomePage: React.FC = () => {
  return (
    <>
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/path/to/hero-image.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay for contrast */}
        <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-5xl font-bold leading-tight">Empowering Decentralized Fundraising</h1>
          <p className="text-xl mt-4 max-w-lg">
            Seamlessly fundraise on the Polygon network with low fees and fast transactions. Build trust with your supporters through decentralized, transparent blockchain technology.
          </p>
          <Link to={paths.causes} className="mt-8 px-8 py-3 bg-highlight hover:bg-highlightDark10 text-white rounded-full shadow-lg transition-all">
            Explore Causes
          </Link>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-primary">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-4">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-text">Decentralized Fundraising</h3>
            <p className="text-gray-600 mt-4">
              No middlemen. All transactions are handled securely on the blockchain, ensuring transparency, trust, and censorship resistance.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-text">Low Fees with Polygon</h3>
            <p className="text-gray-600 mt-4">
              Leverage the Polygon network for low transaction fees and fast processing times, giving your supporters more value for their donations.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-text">Seamless Payouts</h3>
            <p className="text-gray-600 mt-4">
              Receive funds in ETH or USDT, with automatic coin swapping for a smooth and frictionless experience.
            </p>
          </div>
        </div>
      </section>

      {/* Showcase Section: Explore Causes */}

      <HomeSection
        text="Find inspiring causes to support and donate directly with no middleman or censorship, powered by secure blockchain technology."
        href={paths.causes}
        title="Explore Causes"
        buttonText="View All Causes"
        buttonClassName="bg-white hover:bg-gray-100 text-primary"
      />

      <HomeSection
        text="Dcentralized fundraising is the future. Create a transparent, secure, and effective campaign in just a few steps."
        href={paths.fundraise}
        title="Start Fundraising Today"
        buttonText="Start Fundraising"
        buttonClassName="bg-primary hover:bg-primaryDark10 text-white"
      />


    </>
  );
};

export default HomePage;
