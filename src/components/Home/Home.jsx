import { useLoaderData } from "react-router-dom";
import ItemCards from "./ItemCards/ItemCards";
import Banar from "../Header/Banar";
import MakingMoments from "./MakingMoments/MakingMoments";



const Home = () => {

    const itemCards = useLoaderData()

    return (
        <div>
            <Banar></Banar>

            <div className="py-10">
                <h1 className="text-center text-4xl font-bold mb-5"><h1>Awesome Services</h1></h1>
                <p className="text-center font-semibold">Happy birthday! It's great to hear that you're looking for awesome services to make your birthday special. There are many services and ideas to consider, depending on your interests and preferences. Here are some popular options:</p>
            </div>
            <ItemCards itemCards={itemCards}></ItemCards>
            
            <div className="py-10">
                <h1 className="text-center text-4xl font-bold mb-5"><h1>Making Moments In To Memories</h1></h1>
                <p className="text-center font-semibold">Happy birthday! Is a beautiful motto or theme for your birthday celebration or any special occasion. It emphasizes the importance of cherishing and preserving the meaningful moments in life. Here are some ideas for incorporating this theme into your birthday celebration:</p>
            </div>
            <MakingMoments></MakingMoments>
        </div>
    );
};

export default Home;