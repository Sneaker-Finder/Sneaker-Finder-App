import React from 'react';
import Upload from './upload'

const Bottompage = (props) => {
    return (
    <div class="grid gap-x-8 bg-black w-full h-screen grid-cols-2 pr-8">
        <div class="justify-self-end">
            <div class="text-6xl text-white pt-28">
                <h1>Let's Help You</h1>
                <h1 class="p-8">Find Your Shoe</h1>
            </div>
        </div>
        <Upload/>
    </div>
    );
};

export default Bottompage;