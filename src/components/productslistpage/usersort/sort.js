import React from 'react';
import './sort.css';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import history from '../userfilter/history'

export const UserSort = (props) => {

    const handleSortValueChange = (event, index, value) => {
        props.onSortValueChange(value);
        history.push(`/products/list/category=${props.currentCategory}&price=${props.filterPrice}&shipping=${props.filterShipping}&sortValue=${value}&searchTerm=${props.searchTerm}`)
        
        
    }

    return (

        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <div>
                <p style={{marginRight:"1rem"}}>Sort by:</p>
            </div>

            <div>

                <SelectField

                    value={props.sortValue}
                    onChange={handleSortValueChange}
                    listStyle={{color:'green'}}
                    
                    

                >
                    <MenuItem value={1} primaryText="Relevancy" />
                    <MenuItem value={3} primaryText="Highest Price" />
                    <MenuItem value={4} primaryText="Lowest Price" />

                </SelectField>
            </div>
        </div>



    )
}