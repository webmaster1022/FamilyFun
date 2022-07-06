import React from 'react';
import './eventsdetailsui.css';
import { Loading } from '../../animation/loading'



export const EventsDetailsUi=(props)=>{
  
    if (!props.events[0].title){
        return (<Loading />)
    }

    const selectedTitle=props.match.params.id.split('-').join(' ');
    const selectedEvent=props.events.find((event)=>event.title===selectedTitle);
    const html=selectedEvent.content
    
    
    
    return (

        <div className="eventdetailsui-container">
        <div>
            <div className="title">
        
          <h5>{selectedEvent.title}</h5>
          </div>

          <div className="image">
          <img src={selectedEvent.imageSrc} alt="family events images" />
            </div>

        
            <div className="content" dangerouslySetInnerHTML={{ __html:html }}>

</div>
</div>
           
           
        </div>



    )
}