import React, { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const Uncle = ({house}) =>{
    const ring = useContext(RingContext);
    return(
        <div>
            <h3>Uncle</h3>
            <p>House: {house}</p>
            <p><small>Gift: {ring}</small></p>
        </div>
    )
}

export default Uncle;