import { MdSupportAgent, MdWorkspacePremium } from 'react-icons/md';
import { IoIosPeople } from 'react-icons/io';

const MakingMoments = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

            <div className="card w-full bg-base-200 shadow-xl text-center">
                <div className="card-body">
                    <div className='flex justify-center text-8xl'>
                        <MdSupportAgent />
                    </div>
                    <h1 className='font-bold text-2xl'>Free Consultations</h1>
                    <p>Offering free consultations is a common practice in many professional fields and businesses. </p>
                    <button className='bg-red-200 p-2 rounded-full font-bold hover:bg-red-300'>Learn More</button>
                </div>
            </div>
            <div className="card w-full bg-base-200 shadow-xl text-center">
                <div className="card-body">
                    <div className='flex justify-center text-8xl'>
                        <IoIosPeople />
                    </div>
                    <h1 className='font-bold text-2xl'>Certified Expert</h1>
                    <p>
                    A "birthday Certified Expert" isn't a recognized or standard certification or designation like some of the examples I provided earlier. </p>
                    <button className='bg-red-200 p-2 rounded-full font-bold hover:bg-red-300'>Learn More</button>
                </div>
            </div>
            <div className="card w-full bg-base-200 shadow-xl text-center">
                <div className="card-body">
                    <div className='flex justify-center text-8xl'>
                        <MdWorkspacePremium />
                    </div>
                    <h1 className='font-bold text-2xl'>Premium material</h1>
                    <p>
                    It's great that you're looking to celebrate your birthday with premium materials and high-quality elements. </p>
                    <button className='bg-red-200 p-2 rounded-full font-bold hover:bg-red-300'>Learn More</button>
                </div>
            </div>

        </div>
    );
};

export default MakingMoments;