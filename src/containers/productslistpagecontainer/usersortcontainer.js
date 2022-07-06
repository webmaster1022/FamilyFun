
import { connect } from 'react-redux';
import { UserSort } from '../../components/productslistpage/usersort/sort';


const mapStateToProps =(state)=>{
    return {
        currentCategory:state.currentCategory,
        filterPrice:state.filterPrice,
        filterShipping:state.filterShipping,
        sortValue:state.sortValue,
        searchTerm:state.searchTerm,
        productsList:state.productsList

    }    
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSortValueChange:(text)=>dispatch({
            type:"CHANGE_SORTVALUE",
            text
        })
    }
}

export const UserSortContainer=connect (mapStateToProps,mapDispatchToProps)(UserSort)