import React from 'react';

const Spinner = () => {
    return (
        <span className='w-4 h-4 border-2 border-dashed border-white animate-spin flex justify-center items-center'> 
        <span className='w-2 h-2 bg-white rounded-full'></span>
        </span>
    );
};

export default Spinner;