import { useLoaderData } from "react-router-dom";
import ItemCards from "./ItemCards/ItemCards";



const Home = () => {

    const itemCards = useLoaderData()
  
    return (
        <div>
            <h1>This Is home</h1>
            <ItemCards itemCards={itemCards}></ItemCards>
        </div>
    );
};

export default Home;