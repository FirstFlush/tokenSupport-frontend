
















import { ICauseOverview } from "../interfaces/ICauseOverview";


interface CauseProps {
    cause: ICauseOverview;
}

// Need: amount raised, amount required, title, image, date

const CauseOverview:React.FC<CauseProps> = ({ cause }) => {


    return (

        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <img className="w-full h-48 object-cover object-center" src={cause.imageUrl} alt={cause.title} />
            <div className="px-6 py-4">
                <div className="text-text font-bold text-xl mb-2">
                    {cause.title}
                </div>
                <p className="text-gray-600 text-sm mb-4">
                    {new Date(cause.createdAt).toLocaleDateString()}
                </p>
                <div className="relative w-full bg-gray-200 rounded-full h-4 mb-4">
                    <div className="bg-green-500 h-4 rounded-full" style={{ width: `${(cause.amountRaised / cause.amountGoal) * 100}%` }}></div>
                    <div className="absolute inset-0 flex justify-center items-center">
                        <p className="text-text select-none font-semibold text-sm">{Math.round((cause.amountRaised / cause.amountGoal) * 100)}%</p>
                    </div>
                </div>
                <p className="text-text text-base">
                    Raised: {cause.amountRaised} / {cause.amountGoal} ETH
                </p>
            </div>
        </div>
    )
}


export default CauseOverview;