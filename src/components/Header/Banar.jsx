
const Banar = () => {



    return (
        <div>
            <div>
                <section >
                    <div className="carousel w-full hero-overlay bg-opacity-60">
                        <div id="slide1" className="carousel-item relative w-full ">
                            <img  src="https://i.ibb.co/d7LFRwR/a-1.jpg" className="w-full " />
                            <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <div className=" text-white text-center space-y-2 w-full h-44	 ">
                                    <h2 className="  text-xs lg:text-3xl font-extrabold mt-4 lg:mt-0">
                                    Bring your child’s dream event to life</h2>

                                    
                                </div>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src="https://i.ibb.co/hgM2MRm/a-2.jpg" className="w-full" />
                            <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <div className=" text-white text-center space-y-2 w-full h-44	 ">
                                    <h2 className="  text-xs lg:text-3xl font-extrabold mt-4 lg:mt-0">
                                    There’s nothing more magical than a child’s imagination</h2>

                                    
                                </div>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src="https://i.ibb.co/HGcCRmR/a-3.jpg" className="w-full" />
                            <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <div className=" text-white text-center space-y-2 w-full h-44	 ">
                                    <h2 className="  text-xs lg:text-3xl font-extrabold mt-4 lg:mt-0">
                                    Wishing you a day full of happiness and joy</h2>

                                    
                                </div>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <img src="https://i.ibb.co/cxJBBk2/a-4.jpg" className="w-full" />
                            <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <div className=" text-white text-center space-y-2 w-full h-44	 ">
                                    <h2 className="  text-xs lg:text-3xl font-extrabold mt-4 lg:mt-0">
                                    Happiest birthday memories to you this year and every year.</h2>
                                   
                                    
                                </div>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>



        </div>
    );
};

export default Banar;