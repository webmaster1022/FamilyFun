import { connect } from 'react-redux';

import { HomePage } from '../../components/homepage/homepage';



const mapStateToProps = (state) =>{
    return {
        businesses:state.businesses,
        productsList:state.productsList
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {

        }
}

export const HomePageContainer = connect (mapStateToProps,mapDispatchToProps)(HomePage)