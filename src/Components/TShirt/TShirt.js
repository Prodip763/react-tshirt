import React from "react";
import './TShirt.css';

const TShirt = ({tShirt, handleAddToCart}) => {
    const {name, picture, Price} = tShirt;
    return(
        <div className="t-shirt">
            <img src={picture}></img>
            <h4>{name}</h4>
            <p>price: {Price}</p>
            <button onClick={() => handleAddToCart(tShirt)}>Add to Cart</button>
        </div>
    )
}


export default TShirt;