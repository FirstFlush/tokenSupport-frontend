import { useParams } from 'react-router-dom';
import { ICause } from '../interfaces/ICause';
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { fakeCauses } from '../data/fakeCauses';


const CauseDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [cause, setCause] = useState<ICause | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (id) {
            const fetchedCause = fakeCauses.find(cause => cause.id === Number(id));
            if (fetchedCause) {
                setCause(fetchedCause); // Replace with actual API call in the future
                setError(null);
            } else {
                setError('Cause not found');
                setCause(null);
            }
            
        }
    }, [id]);


    if (error) {
        return <p>{error}</p>; 
    }

    if (!cause) {
        return <p>Loading...</p>;
    }

    return (
        <Layout>
        <div className="container mx-auto py-10 px-4">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-primary">{cause.title}</h1>
                <p className="text-text text-sm mt-2">
                    {new Date(cause.createdAt).toLocaleDateString()} by {cause.creator}
                </p>
            </div>

            {/* Image Gallery */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {cause.imageUrl.map((url, index) => (
                    <img
                        key={index}
                        src={url}
                        alt={cause.title}
                        className="w-full h-80 object-cover rounded-lg shadow-md"
                    />
                ))}
            </div> */}

            {/* Cause Details */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-text mb-4">Cause Description</h2>
                <p className="text-gray-700 mb-6">{cause.description}</p>

                {/* Donation Progress */}
                <div className="w-full bg-gray-200 rounded-full h-6 mb-4 relative">
                    <div
                        className="bg-highlight h-6 rounded-full"
                        style={{ width: `${(cause.amountRaised / cause.amountGoal) * 100}%` }}
                    ></div>
                    <div className="absolute inset-0 flex justify-center items-center">
                        <p className="text-text text-lg ">
                            {Math.round((cause.amountRaised / cause.amountGoal) * 100)}% funded
                        </p>
                    </div>
                </div>

                {/* Donation Stats */}
                <div className="flex justify-between text-gray-700 mb-6">
                    <p>
                        <strong>Raised:</strong> {cause.amountRaised} ETH
                    </p>
                    <p>
                        <strong>Goal:</strong> {cause.amountGoal} ETH
                    </p>
                    <p>
                        <strong>Completed:</strong> {cause.completed ? "Yes" : "No"}
                    </p>
                </div>

                {/* Contact Information */}
                <div className="border-t pt-4">
                    <h3 className="text-lg font-semibold text-text">Contact Creator</h3>
                    <p className="text-gray-600">
                        <strong>Email:</strong> {cause.email}
                    </p>
                    <p className="text-gray-600">
                        <strong>Wallet:</strong> {cause.wallet}
                    </p>
                </div>
            </div>
        </div>
        </Layout>
    );
};

export default CauseDetailPage;











// import { useParams } from 'react-router-dom';


// const CauseDetailPage: React.FC = () => {

//     const { id } =  useParams()

//     return (
//         <div>
//             <h1>bleh cuase detail page</h1>
//             <p>{id}</p>
//         </div>
//     )
// }


// export default CauseDetailPage;