import React from "react";
import Special from "../Special/Special";
import './Myself.css';

const Myself = ({house}) =>{
    return(
        <div className="self">
            <h3>Myself</h3>
            <p>House: {house}</p>
            <Special ></Special>
        </div>
    )
}

export default Myself;