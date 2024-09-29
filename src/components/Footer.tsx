import { COMPANY_DOMAIN } from "../utils/constants";


const Footer: React.FC = () => {

    return (
        <div className="bg-primary text-white p-4">
            <p>&copy; 2024 {COMPANY_DOMAIN}</p>
        </div>
    )
}


export default Footer;