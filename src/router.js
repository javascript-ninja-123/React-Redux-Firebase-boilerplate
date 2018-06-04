import React, {PropTypes} from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom'

import APP from './components/App';
import Header from './components/common/header/header';

 class Router extends React.Component {

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route path='/' component={APP}/>
        </Switch>
      </div>
    );
  }
}

export default Router;
