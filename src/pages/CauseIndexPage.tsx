import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import CauseOverview from "../components/CauseOverview";
import { fakeCauses } from "../data/fakeCauses";
import { ICauseOverview } from "../interfaces/ICauseOverview";
import { paths } from "../routes/paths";


const CauseIndexPage: React.FC = () => {
    const [causes, setCauses] = useState<ICauseOverview[]>([]);

    useEffect(() => {
        setCauses(fakeCauses);
    }, []);

    return (
        <Layout>
            {/* Page Header */}
            <div className="text-center py-10 bg-secondary">
                <h1 className="text-4xl font-bold text-primary">Explore Causes</h1>
                <p className="text-text mt-4">
                    Browse through various causes and make a difference by donating to the ones that inspire you.
                </p>
            </div>

            {/* Causes Grid */}
            <div className="container mx-auto px-4 py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {causes.map((cause) => (
                        <Link to={paths.causeDetail(cause.id)}>
                            <CauseOverview key={cause.id} cause={cause} />
                        </Link>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default CauseIndexPage;



















// import {useEffect, useState} from "react";
// import Layout from "../components/Layout";
// import CauseOverview from "../components/CauseOverview";
// import { fakeCauses } from "../data/fakeCauses";
// import { ICauseOverview } from "../interfaces/ICauseOverview";


// const CauseIndexPage: React.FC = () => {

//     const [causes, setCauses] = useState<ICauseOverview[]>([]);

//     useEffect(() => {
//         setCauses(fakeCauses)
//     }, [])


//     return (
//         <Layout>
//             <div>
//                 {causes.map((cause) => {
//                     return (
//                         <div className="py-4">
//                             <CauseOverview key={cause.id} cause={cause}/>
//                         </div>
//                     )
//                 })}
//             </div>
//         </Layout>
//     );
// };

// export default CauseIndexPage;
