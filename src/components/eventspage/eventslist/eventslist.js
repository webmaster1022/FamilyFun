import React from 'react';
import { SingleEventUi } from './singleeventui';
import './eventslist.css';
import { Link } from 'react-router-dom';
import { Loading } from '../../animation/loading'

export const EventsList = (props) => {


    return (
        <div className='eventslist-container'>
            <div className="currentposition">

                <Link to="/">home</Link>
                >
        <Link to='/events/list'>events</Link>



            </div>
            <div className='intro'>
                <p>Fantastic Family Events Every Week, Join Us Now!</p>
            </div>
            <div className='list'>

                {props.eventsList[0].title? props.eventsList.map((event) => <SingleEventUi event={event} key={event.imageSrc} />):<Loading />}

            </div>
        </div>


    )
}