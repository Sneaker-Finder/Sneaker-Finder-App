import React from 'react';

const Upload = (props) => {
    return (
        <div className="flex w-full max-w-2xl p-20 mr-8">
            <div id="upload-box" className="bg-white flex flex-col w-full max-w-2xl rounded-lg h-1/2 items-center justify-center">
                <img src='assets/images/remove_icon.png' alt="Placeholder Image" className="rounded" width="125" height="125"/>
                <h1 className="text-3xl font-bold">Upload Image</h1>
            </div>
        </div>
        );
};

export default Upload;