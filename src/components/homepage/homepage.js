import React from 'react';
import { ImageShow } from './imageshow/imageshow';
import { MainListsContainer } from '../../containers/homepagecontainer/mainlistscontainer';

import './homepage.css'


export const HomePage =(props)=>{

    return (
        <div className="homepage-container">
        <ImageShow />
        <MainListsContainer />
        
        </div>
    )

}