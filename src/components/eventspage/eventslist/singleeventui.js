import React from 'react';
import { Link } from 'react-router-dom';
import './singleeventui.css'

export const SingleEventUi=(props)=>{

    const event=props.event;
    const link=event.title.split(' ').join('-');

    

    const limitedBrief=()=>{
        if (event.brief.split(' ').length>17){
            
        return event.brief.split(' ').slice(0,16).join(' ') +' ...';

        }
        return event.brief;

    }

    return (
        <Link  to={`/events/details/${link}`}><div className="singleeventui-container">

  

            <div className="image">
            <img className="img" src={event.imageSrc} alt='event-images'/>
            </div>
            <br />

            <div className="title">
            <p>{event.title}</p>
            </div>
            <br />

            <div className="brief">
            <p>{limitedBrief()}</p>
            </div>
            <br />

        </div></Link>
    )


}