import { connect } from 'react-redux';

import App from '../App';
import { withRouter } from 'react-router-dom';
import { fetchProducts } from '../action/fetchproducts';
import { fetchEvents } from '../action/fetchevents';



const mapStateToProps =(state)=> {
    return {

        term: state.term,
        location: state.location,
        sortBy: state.sortBy,
        businesses: state.businesses,
        isLoading:state.isLoading,
        productsList:state.productsList,
        checkOutProducts:state.checkOutProducts,
        checkOutWebUrl:state.checkOutWebUrl,
        checkOutId:state.checkOutId,
        openCheckOut:state.openCheckOut,
        events:state.events,
        currentCategory:state.currentCategory,
        login:state.login,
        eventsList:state.eventsList,
        

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       
        fetchProducts:()=>dispatch(fetchProducts()),
        fetchEvents:()=>dispatch(fetchEvents()),
        fetchCheckOutProducts:(text)=>dispatch({
            type:"RESTORE_CART",
            text

        }),
        handleUserReload:(text)=>dispatch({
            type:'CHANGE_LOGIN',
            text
        }),
           
    }
}




export const AppContainer = withRouter(connect (mapStateToProps,mapDispatchToProps)(App)) 