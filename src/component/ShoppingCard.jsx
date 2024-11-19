const ShoppingCard = ({image, category, price, rate}) => {
    return (
        <>
            <div className="shopping-card">
                <div className="shopping-image">
                    <img src={image} alt="shopping card" />
                </div>
                <h3>{category}</h3>
                <hr className="shopping-hr"/>
                <div className="shopping-price">
                    <h5>{price}</h5>
                    <h5>({rate})</h5>
                </div>
                <hr className="shopping-hr"/>
                <button>Add to cart</button>
            </div>
        </>
    )
}
export default ShoppingCard;
