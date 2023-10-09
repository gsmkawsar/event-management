

const Description = ({ description }) => {

    const { id, name, image, price, short_description, button_text } = description || {};
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={image} alt="Album" /></figure>
                <div className="card-body bg-red-100">
                    <h2 className="card-title">{name}</h2>
                    <p>{short_description}</p>
                    <div className="card-actions rounded-full justify-end bor bg-red-400 h-14 items-center text-center p-2">
                        <p className="text-2xl text-white "><span className="font-bold text-gray-950">Price:</span> ${price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Description;