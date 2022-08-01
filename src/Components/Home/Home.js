import { toHaveDescription } from "@testing-library/jest-dom/dist/matchers";
import React, { useState } from "react";
import Cart from '../Cart/Cart';
import UseTShirt from "../hooks/UseTShirt";
import TShirt from "../TShirt/TShirt";
import './Home.css';

const Home = () => {
    const [tShirts, setTShirts] = UseTShirt();
    const [cart, setCart] = useState([]);
    const handleAddToCart = (selectedItem) => {
        const exist = cart.find(tShirt => tShirt._id === selectedItem._id)
        if (!exist) {
            const newCart = [...cart, selectedItem];
            setCart(newCart);
        }
        else{
            alert('item is already added');
        }

    }

    const handleRemoveToCart = (selectedItem) => {
        const reset = cart.filter(tShirt => tShirt._id !== selectedItem._id);
        setCart(reset);
    }
    return (
        <div className="home-container">
            <div className="tshirt-container">
                {
                    tShirts.map(tShirt => <TShirt
                        key={tShirt._id}
                        tShirt={tShirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}
                    handleRemoveToCart={handleRemoveToCart}
                ></Cart>
            </div>
        </div>
    );
};


export default Home;