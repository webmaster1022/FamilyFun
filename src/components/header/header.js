import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';



import { RegisterBarContainer } from '../../containers/signup&signincontainer/registerbarcontainer';
import history from '../../components/productslistpage/userfilter/history';


export class HeaderSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: this.props.searchTerm,

            clickedBtn: '',
            currentUrl: window.location.pathname
        };
        this.handleInputSubmit = this.handleInputSubmit.bind(this);
        this.onMenuClick = this.onMenuClick.bind(this);
        this.onRegisterBarClick = this.onRegisterBarClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount() {
        history.listen((location, action) => {
            this.setState({

                currentUrl: location.pathname

            })
        })

    }
    handleInputSubmit(event) {
        event.preventDefault()

        const val = this.state.searchTerm;
        history.push(`/products/list/category=All&price=All&shipping=All&sortValue=1&searchTerm=${val}`)
       
        
    }

    componentWillReceiveProps(nextProps){

       
        this.setState({
            searchTerm:nextProps.searchTerm

        })

       
    }

    handleInputChange(event) {
        
        this.setState({
            searchTerm: event.target.value,
        })
        
        event.preventDefault();
    }

    handleRegisterClick(event) {

        this.props.handleRegisterClick();
        event.preventDefault();
       
    }

    onLogoClick(event) {
        this.props.onLogoClick('')
    }

    onMenuClick(event) {
        this.setState({
            clickedBtn: event.target.title,

        })
     

    }

    onRegisterBarClick(value) {
        this.setState({
            clickedBtn: value,
        })

    }

    render() {


        return (
            <div className="header-final-container">

                <div className="header-ipadpro">

                    <div className="header-left">
                        <Link to='/'><h2 className="header-h2" onClick={this.onLogoClick.bind(this)}>FamilyFun</h2></Link>

                        <form className="header-search-ipadpro" onSubmit={this.handleInputSubmit}>

                            <input type="text" onChange= {this.handleInputChange} className="header-input" value={this.state.searchTerm} placeholder="Search Our Products..." />
                            <input type="submit" value="Search" className="header-button" />

                        </form>
                    </div>
                    <div className="header-right">

                        <div><Link to='/products/list/category=All&price=All&shipping=All&sortValue=1&searchTerm='
                            className={this.state.currentUrl.includes('products') ? "productsbtn activebtn" : 'productsbtn'}>
                            Products
                    </Link>
                            <Link to='/events/list' className={this.state.currentUrl.includes('events') ? 'eventsbtn activebtn' : "eventsbtn"}>
                                Events

                    </Link>
                        </div>
                        <div className="registerbar">
                            <RegisterBarContainer currentUrl={this.state.currentUrl} />
                        </div>
                        <div className='hearder-cart'>

                        <Link to='/cart' className="cart"><i className="fa fa-cart-arrow-down"></i></Link>
                        <div className={this.props.checkOutProducts.length===0?'displaynone':'itemsincart'}>{this.props.checkOutProducts.length}</div>
                        </div>

                    </div>

                </div>

                <div className="header-search-ipad">
                    <form className="header-search" onSubmit={this.handleInputSubmit}>

                        <input type="text" onChange= {this.handleInputChange} value={this.state.searchTerm} className="header-input" placeholder="Search Our Products..." />
                        <input type="submit" value="Search" className="header-button" />

                    </form>
                </div>


                <div className='header-mobile'>

                    <div className="logo-cart">

                        <div className="header-left">
                            <Link to='/'><h2 className="header-h2" onClick={this.onLogoClick.bind(this)}>FamilyFun</h2></Link>

                        </div>
                        <div className="header-right, hearder-cart">
                            <Link to='/cart' className="cart"><i className="fa fa-cart-arrow-down"></i></Link>
                            <div className={this.props.checkOutProducts.length===0?'displaynone':'itemsincart'}>{this.props.checkOutProducts.length}</div>
                        </div>
                    </div>

                    <div className="header-btns-mobile">

                        <div className='products-events'>

                            <Link to='/products/list/category=All&price=All&shipping=All&sortValue=1&searchTerm='
                                onClick={this.onMenuClick}
                                title="Products"
                                className={this.state.currentUrl.includes('products') ? "productsbtn activebtn" : 'productsbtn'}>
                                Products
</Link>
                            <Link to='/events/list'
                                onClick={this.onMenuClick}
                                title="Events"
                                className={this.state.currentUrl.includes('events') ? 'eventsbtn activebtn' : "eventsbtn"}>Events</Link>
                        </div>
                        <div className="registerbar"><RegisterBarContainer currentUrl={this.state.currentUrl} /></div>
                    </div>



                    <div className="header-search-mobile">
                        <form className="header-search" onSubmit={this.handleInputSubmit}>

                            <input type="text" onChange= {this.handleInputChange} value={this.state.searchTerm} className="header-input" placeholder="Search..." />
                            <input type="submit" value="Search" className="header-button" />

                        </form>
                    </div>

                </div>




            </div>

        )
    }
}