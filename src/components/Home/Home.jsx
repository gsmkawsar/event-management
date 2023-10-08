import { useLoaderData } from "react-router-dom";
import ItemCards from "./ItemCards/ItemCards";



const Home = () => {

    const itemCards = useLoaderData()
  
    return (
        <div>
            <ItemCards itemCards={itemCards}></ItemCards>
        </div>
    );
};

export default Home;