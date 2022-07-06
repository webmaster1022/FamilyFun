import React, { Component } from 'react';

import './App.css';

import { HeaderContainer } from './containers/headercontainer/headercontainer'
import { CategoryBarContainer } from './containers/categorybarcontainer/categorybarcontainer'
import { ProductsListPage } from './components/productslistpage/finalui/productslistpage';
import { RegisterFormContainer } from './containers/signup&signincontainer/registerformcontainer';
import { PersonalCenterContainer } from './containers/signup&signincontainer/personalcentercontainer';
import { LoginPageContainer } from './containers/signup&signincontainer/loginpagecontainer';
import { Route, Switch} from 'react-router-dom';
import { Footer } from './components/footer/footer';
import { HomePageContainer } from './containers/homepagecontainer/homepagecontainer';
import { ProductDetails } from './components/productdetailspage/final/final-ui';
import { CartFinalUiContainer } from './containers/cartcontainer/cartfinaluicontainer';
import { CheckOutFinishContainer } from './containers/checkoutfinishipagecontainer/checkoutfinishcontainer';
import { EventsListContainer } from './containers/eventspagecontainer/eventslistcontainer';
import {  EventsDetailsUi } from './components/eventspage/eventsdetails/eventsdetailsui';
import { TermOfUse } from './components/footer/termofuse/termofuse';
import { Privacy } from './components/footer/privacy/privacy';
import { UserFilterMobileContainer } from './containers/productslistpagecontainer/userfiltermobilecontainer';
import { NoPage } from './components/404page/404page';
import { ResetPassword } from './components/signin&signup/resetpassword';
import { ChangePassword } from './components/signin&signup/changepassword';
import { firebase } from './firebase/index';




class App extends Component {

  constructor(props){
    super(props)
    this.state={
      shopifyproducts:'',
      eventsList:this.props.eventsList,
    }

  }


componentWillMount() {

  const restoredData=JSON.parse(window.localStorage.getItem ("cartinfo"));

  if (restoredData==null){
    return;
  }

  this.props.fetchCheckOutProducts(restoredData);
}

componentDidMount(){

  this.props.fetchEvents();
  this.props.fetchProducts();




  firebase.auth.onAuthStateChanged((authuser)=>{
    if(authuser){
      const userInfo={
        loginStatus:true,
        loginInfo:{
          account:authuser.email,
        }
      }
      this.props.handleUserReload(userInfo)
    }
    if(!authuser){
      return
    }
  })
}



  render() {
    return (

      <div className="App">
     

        <HeaderContainer />
       
        <CategoryBarContainer />
        <div className='appmain'>
        <Switch>

           
          <Route
            path='/'
            exact
            component={HomePageContainer} />

            <Route path="/events/list" component={EventsListContainer}/>
            <Route path='/events/details/:id' render={(props)=><EventsDetailsUi {...props} events={this.props.eventsList} />}/>

 <Route path='/products/productsdetails/:id' render={(props)=><ProductDetails {...props} productsList={this.props.productsList}   />} />
          <Route path='/products/userfiltermobile' component={ UserFilterMobileContainer } />
          <Route path='/products' render={(props)=><ProductsListPage {...props} currentCategory={this.props.currentCategory}/>} />
          <Route path='/personalcenter' component={PersonalCenterContainer} />
          <Route path='/signin' component={LoginPageContainer} />
          <Route path='/register' component={RegisterFormContainer} />
          <Route path='/resetpassword' component={ResetPassword} />
          <Route path='/changepassword' render={(props)=><ChangePassword {...props} login={this.props.login} />} />
          <Route path='/cart' component={CartFinalUiContainer}/>
          <Route path='/cartcheckoutfinished' component={CheckOutFinishContainer} /> 
          <Route path='/term-of-use' component={TermOfUse} />
          <Route path='/privacy' component={Privacy} />
         <Route component={ NoPage } />
       
        </Switch>
        </div>

        <Footer />
      

      </div>


    )
  }
}

export default App;
