import { connect } from 'react-redux';

import { CategoryBar } from '../../components/categorybar/categorybar';



const mapStateToProps = (state) =>{
    return {
        currentCategory:state.currentCategory,
        filterPrice:state.filterPrice,
        filterShipping:state.filterShipping,
        sortValue:state.sortValue,
        searchTerm:state.searchTerm,
        productsList:state.productsList
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {

        
        changeSearchTerm:()=>dispatch({

            type:'CHANGE_SEARCHTERM',
            text:'',
            
        }),
        onCategoryClick:(text)=>dispatch({

            type:"CHANGE_CATEGORY",
            text
        }),
      
      

    }
}

export const CategoryBarContainer = connect (mapStateToProps,mapDispatchToProps)(CategoryBar)