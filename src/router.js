import React, {PropTypes} from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom'

import APP from './components/App';
import Header from './components/common/header/header';
import Login from './components/login/login';

 class Router extends React.Component {

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/' component={APP}/>
        </Switch>
      </div>
    );
  }
}

export default Router;
