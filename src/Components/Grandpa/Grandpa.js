import React, { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css';

export const RingContext = createContext('ring')

const Grandpa = () => {
    const [house, setHouse] = useState(1);
    const ornament = 'Diamond Ring';
    const handleAddToHouse = (house) => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }
    return (
        <RingContext.Provider value={ornament}>
            <div className="grandpa">
                <h2>Grandpa</h2>
                <p>House: {house} <button onClick={() => handleAddToHouse(house)}>Buy a house</button></p>

                <div style={{ display: 'flex' }}>
                    <Father house={house} ></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </div>
            </div>
        </RingContext.Provider>
    )
}

export default Grandpa;