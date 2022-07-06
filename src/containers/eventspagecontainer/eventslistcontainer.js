import { connect } from 'react-redux';

import { EventsList } from '../../components/eventspage/eventslist/eventslist';


const mapStateToProps = (state) =>{
    return {
        events:state.events,
        ...state
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        

        }
}

export const EventsListContainer = connect (mapStateToProps,mapDispatchToProps)(EventsList)