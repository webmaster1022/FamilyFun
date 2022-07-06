import React from 'react';
import './checkoutfinish.css';
import history from '../../components/productslistpage/userfilter/history'

export class CheckOutFinish extends React.Component {
 

    componentDidMount(){

        window.localStorage.removeItem('cartinfo');
        
        this.props.onCheckedOutBack();
        setTimeout(()=>{
            history.push('/products/list/category=All&price=All&shipping=All&sortValue=1&searchTerm=')
            
        },1000)
    }

        

    render(){

    return (<div className="checkoutfinish-container"><div>Thanks {this.props.checkOutId}for your shopping!</div></div>)
}

}