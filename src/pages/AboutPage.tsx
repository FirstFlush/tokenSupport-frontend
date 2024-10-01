import { COMPANY_NAME } from "../utils/constants";
import FAQ from "../components/FAQ";
import { fakeFaqItems } from "../data/fakeFAQ";


const AboutPage: React.FC = () => {

  return (
    <div>
      <div className="relative min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 py-12 px-6">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-4xl font-bold text-primary mb-6">About {COMPANY_NAME}</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            {COMPANY_NAME} is a decentralized crowdfunding platform that leverages the power of DeFi to help fundraisers achieve their goals. We believe in providing transparent, efficient, and secure financial solutions that empower individuals and organizations to fund their causes without relying on centralized systems.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Built with cutting-edge blockchain technology, {COMPANY_NAME} integrates <strong>Uniswap</strong> capabilities to seamlessly process payments in <strong>Ethereum</strong> or <strong>USDT ERC-20</strong>. Our system ensures that if a fundraiser does not reach its target, contributors will be refunded automatically, offering peace of mind to all supporters.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            All transactions are executed on the <strong>Polygon</strong> network, allowing faster and more affordable Ethereum-based transactions, ensuring efficiency without compromising security. Additionally, we utilize <strong>IPFS</strong> (InterPlanetary File System) to store all media, ensuring that the platform remains fully decentralized from end to end.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            At {COMPANY_NAME}, we are committed to fostering an ecosystem of trust, transparency, and empowerment for fundraisers and backers alike. We are humbled to play a small part in driving the future of decentralized finance and community support.
          </p>
        </div>
      </div>
      <div>
        <FAQ />
      </div>
    </div>
  );
};

export default AboutPage;
