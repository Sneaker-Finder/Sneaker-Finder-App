import React from 'react';
import Upload from './upload'

const Bottompage = (props) => {
    return (
    <div className="flex gap-x-8 bg-black w-full h-screen pr-8">
        <div className="justify-self-end">
            <div id="main-text" className="justify-items-end text-xl md:text-3xl lg:text-5xl hidden md:block text-white pt-28 pl-14">
                <h1 className="justify-self-end">Let's Help You</h1>
                <h1 className="p-3 justify-self-end">Find Your Shoe</h1>
            </div>
        </div>
        <Upload/>
    </div>
    );
};

export default Bottompage;