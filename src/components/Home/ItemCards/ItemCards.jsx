
import ItemCard from '../ItemCard/ItemCard';

const ItemCards = ({itemCards}) => {

    return (
               <div className="py-10">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                {
                    itemCards?.map(itemCard => <ItemCard key={itemCard.id} itemCard={itemCard}></ItemCard>)
                }
            </div>

        </div>
    );
};

export default ItemCards;