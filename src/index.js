import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { AppContainer } from './containers/appcontainer'
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { lightBlack, red400 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Router } from 'react-router-dom';

import history from '../src/components/productslistpage/userfilter/history'




import { rootReducer } from './reducer/rootreducer'



const muiTheme = getMuiTheme({



  radioButton: {
    size: 1,
    borderColor: lightBlack,
    checkedColor: red400,

  }
});



let store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>

    <MuiThemeProvider muiTheme={muiTheme}>
      <Router history={history}>

        <AppContainer />
      </Router>
    </MuiThemeProvider>

  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
