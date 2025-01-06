import React from "react";

const CarDetails = ({brand, km, color}) => {
    return (
        <div>
            <h3>Car Info:</h3>
            <ul>
                <li>Brand: {brand}</li>
                <li>KM: {km}</li>
                <li>Color: {color}</li>
            </ul>
        </div>
    )
}

export default CarDetails