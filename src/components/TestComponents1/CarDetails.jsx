import React from "react";

const CarDetails = ({brand, km, color, newCar}) => {
    return (
        <div>
            <h3>Car Info:</h3>
            <ul>
                <li>Brand: {brand}</li>
                <li>KM: {km}</li>
                <li>Color: {color}</li>
                {newCar && <li>New car.</li>}
            </ul>
        </div>
    )
}

export default CarDetails