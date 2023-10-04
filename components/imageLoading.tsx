import React, { FC } from 'react';

type propsType = {
    loadingText: string|any;
}

const ImageLoading = ({loadingText}:propsType) => {
    return (
        <div className='text-white mx-auto'>
           {loadingText}
        </div>
    );
};

export default ImageLoading;