import React from "react";
import './Cart.css';

const Cart = ({cart, handleRemoveToCart}) => {
    let command;
    if(cart.length === 0){
        command = <p>Please add some items</p>
    }
    else if(cart.length ===1){
        command = <p>Please add more</p>
    }
    else{
        command = <p><small>Thankd for adding item</small></p>
    }
    return(
        <div>
            <h2>This is cart: {cart.length}</h2>
            {
                cart.map(tShirt => <p>{tShirt.name}
                <button onClick={() => handleRemoveToCart(tShirt)}>X</button>
                </p>)
            }
            {cart.length === 0|| <p>YaY! you are buying</p>}
            {cart.length ===3 && <div className="orange">
                <h3>Trigonal</h3>
                <p>Tin jon ke gift diba</p>
                </div>}
                {command}
                {cart.length !==4 ? <p>Keep adding</p> : <button>Remove All</button>}
                {cart.length ===4 && <button className="orange">Review Order</button>}
        </div>
    );
};


export default Cart;