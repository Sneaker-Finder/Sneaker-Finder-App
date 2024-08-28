import React from 'react';

const Navbar = (props) => {
    return (
    <nav className="bg-black">
        <div className="grid grid-cols-2 h-16 gap-4 px-6">
            <div className="flex justify-self-start px-8 pt-5">
            <h1 className="flex-none text-white">{props.name}</h1>
            </div>
        </div>
    </nav>);
};

export default Navbar;