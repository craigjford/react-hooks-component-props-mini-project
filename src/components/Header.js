import React from "react";

function Header({ name }) {
    const nameStr = {name}
    console.log('in Header ', nameStr);
    return (
    <header>
        <h1>{name}</h1>
    </header>)
}

export default Header;