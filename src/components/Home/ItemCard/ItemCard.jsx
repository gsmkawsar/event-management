import React from 'react';
import { Link } from 'react-router-dom';

const ItemCard = ({ itemCard }) => {

    const { id, name, image, price, short_description, button_text } = itemCard || {};

    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="text-red-600 font-bold">
                    <Link to={`/description${id}`}>
                    <p>See More</p>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default ItemCard;