import React from 'react';
import { Link } from 'react-router-dom';

const ItemCard = ({ itemCard }) => {

    const { id, name, image, price, short_description, button_text } = itemCard || {};

    return (
        <div className="card w-full bg-red-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{name}</h2>
                <p className='text-xl font-bold'>Services Price: <span className='text-red-600'>${price}</span> </p>
                <div className="text-red-600 font-bold">
                    <Link to={`/descriptions/${id}`}>
                    <button className='bg-red-600 p-2 rounded-lg text-white'>See More</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default ItemCard;