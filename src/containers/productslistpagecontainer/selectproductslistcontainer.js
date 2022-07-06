import { connect } from 'react-redux';
import { SelectProductsList } from '../../components/productslistpage/selectproductslist/selectproductlistui/selectproductslist';

const mapStateToProps = (state, {match:{params}} ) =>{

 
    const totalSelectValue=params.id.split('&').map((val)=>val.split('=')[1]);

    return {
        
        currentCategory:totalSelectValue[0],
        filterPrice:totalSelectValue[1],
        filterShipping:totalSelectValue[2],
        sortValue:totalSelectValue[3],
        searchTerm:totalSelectValue[4],
        productsList:state.productsList,
       
    }

}

const mapDispatchToProps = ( dispatch ) =>{
    return {
        
        changeCurrentCategory:(text)=>dispatch({
            type:'CHANGE_CATEGORY',
            text

        }),
        changeFilterPrice:(text)=>dispatch({
            type:"CHANGE_PRICE",
            text

        }),
        changeFilterShipping:(text)=>dispatch({
            type:"CHANGE_SHIPPING",
            text,

        }),
        changeSortValue:(text)=>dispatch({
            type:"CHANGE_SORTVALUE",
            text

        }),
        changeSearchTerm:(text)=>dispatch({
            type:"CHANGE_SEARCHTERM",
            text

        })
      
       
    }

}







export const SelectProductsListContainer = connect (mapStateToProps,mapDispatchToProps)(SelectProductsList)
