import React from 'react'

const User = () => {
    const handleClick = () => {
        console.log("user clicked");
    };
    const handleClick2 = (name) => {
        console.log(name + "Clicked");
    };
    // handleClick2('AYo')

    return (
        <div>
            <h1>Responding to users Interaction</h1>
            <button onClick={handleClick}>CLICK Me!</button>
            <button onClick={() => handleClick2("AYO")}>CLICK AGAIN</button>
        </div>
    );
};

export default User