import React from 'react';
import { Movie } from '../utilities/types';

type propsType = {
    details: Movie;
    indexNumber: number;
}

const MoviePreview = ({details, indexNumber}:propsType) => {
    console.log("💛indexNumber:", indexNumber, (indexNumber+1) * 244.8)
    return (
        <div className={`moviePreview_block `}>
            <div className='video_player'></div>
            <div className='movie_content_block'>
                aaaaa
            </div>
            
        </div>
    );
};

export default MoviePreview;

