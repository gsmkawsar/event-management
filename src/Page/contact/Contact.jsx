import { FaLocationDot } from 'react-icons/fa6';
import { BiPhoneCall } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';


const Contact = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

            <div className="card flex justify-center w-full h-64 bg-lime-500 shadow-xl text-center text-white">
                <div className="">
                    <div className='flex justify-center text-8xl'>
                        <FaLocationDot />
                    </div>
                    <h1 className='font-bold text-4xl py-4'>Location</h1>
                    <p>Jln Cempaka Wangi No 22 <br />
                        Jakarta - Indonesia </p>
                </div>
            </div>
            <div className="card flex justify-center w-full h-64 bg-red-500 shadow-xl text-center text-white">
                <div className="">
                    <div className='flex justify-center text-8xl'>
                        <BiPhoneCall />
                    </div>
                    <h1 className='font-bold text-4xl py-4'>Call Us</h1>
                    <p>Phone : +6221.2002.2012 <br />
                        Fax: +6221.2002.2013 </p>
                </div>
            </div>
            <div className="card flex justify-center w-full h-64 bg-green-600 shadow-xl text-center text-white">
                <div className="">
                    <div className='flex justify-center text-8xl'>
                        <AiOutlineMail />
                    </div>
                    <h1 className='font-bold text-4xl py-4'>Email Us</h1>
                    <p>hello@beeparty.com <br />
                        support@beeparty.tld </p>
                </div>
            </div>



        </div>
    );
};

export default Contact;