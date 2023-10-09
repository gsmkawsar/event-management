import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Description from "./Description";

const DescriptionAll = () => {


    const [description, setDescriptions] = useState({})

    const { id } = useParams();
    const descriptions = useLoaderData();


    useEffect(() => {
        const findDescription = descriptions?.find((description) => description.id == id);
        setDescriptions(findDescription)
    }, [id, descriptions]);


    return (
        <div>
            <Description description={description} ></Description>
        </div>
    );
};


export default DescriptionAll;