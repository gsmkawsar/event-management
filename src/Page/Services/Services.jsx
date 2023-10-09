

const Services = () => {
    return (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="card w-full glass">
                <div className="bg-amber-400 p-5 text-white text-center">
                    <h1 className=" text-3xl font-bold ">Small Party</h1>
                    <p>Small group party</p>
                </div>
                <div className="card-body text-center">
                    <h2 className="text-7xl font-bold text-amber-400">$749</h2>
                    <p className="font-bold mb-4">/event</p>
                    <p>Recommended for 10-15 Participant</p>
                    <hr />
                    <p>Costplay Character</p>
                    <hr />
                    <p>Fun Decoration</p>
                    <hr />
                    <p>Awesome Cake</p>
                    <hr />
                    <p>Birthday Cake</p>           
                    <button className="p-4 bg-amber-400 rounded-lg font-bold">Get a Quote</button>


                </div>
            </div>
            <div className="card w-full glass">
                <div className="bg-lime-500 p-5 text-white text-center">
                    <h1 className=" text-3xl font-bold ">Big Party</h1>
                    <p>Big group party</p>
                </div>
                <div className="card-body text-center">
                    <h2 className="text-7xl font-bold text-lime-500">1,249</h2>
                    <p className="font-bold mb-4">/event</p>
                    <p>Recommended for 20-30 Participant</p>
                    <hr />
                    <p>Costplay Character</p>
                    <hr />
                    <p>Fun Decoration</p>
                    <hr />
                    <p>Awesome Cake</p>
                    <hr />
                    <p>Birthday Cake</p>           
                    <button className="p-4 bg-lime-500 rounded-lg font-bold">Get a Quote</button>


                </div>
            </div>
            <div className="card w-full glass">
                <div className="bg-red-500 p-5 text-white text-center">
                    <h1 className=" text-3xl font-bold ">Luxury Party</h1>
                    <p>Luxury & Big group party</p>
                </div>
                <div className="card-body text-center">
                    <h2 className="text-7xl font-bold text-red-500">2,099</h2>
                    <p className="font-bold mb-4">/event</p>
                    <p>Recommended for 30-50 Participant</p>
                    <hr />
                    <p>Costplay Character</p>
                    <hr />
                    <p>Fun Decoration</p>
                    <hr />
                    <p>Awesome Cake</p>
                    <hr />
                    <p>Birthday Cake</p>           
                    <button className="p-4 bg-red-500 rounded-lg font-bold">Get a Quote</button>


                </div>
            </div>

        </div>
    );
};

export default Services;