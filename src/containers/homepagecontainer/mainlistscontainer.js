import {connect} from 'react-redux';
import { MainLists } from '../../components/homepage/mainlists/mainlists';

const mapStateToProps = (state) =>{
    return {
        businesses: state.businesses,
        productsList: state.productsList,
        collectionList: state.collectionList,
        eventsList:state.eventsList,
        ...state,
       
    }
}

export const MainListsContainer = connect (mapStateToProps,null)(MainLists)