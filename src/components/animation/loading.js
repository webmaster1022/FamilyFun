import React from 'react';
import './loading.css';

export const Loading = (props)=>{

    return (

        <div className="loading-container" >

          <p className="loading-title">{props.info!==undefined?props.info:'Loading now, just one minute!'}</p>

          
              <div className="loading-animation">
              </div>            

          

        </div>


        
     

       
    )

}