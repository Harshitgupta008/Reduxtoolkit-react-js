const Card = ({ image, title }) => {
    return (
        <>
            <div  className="card">
                <div className="image-divcard"><img src={image} alt="practice-image" /></div>
                <h4>@ {title}</h4>
            </div>
        </>
    )
}
export default Card;