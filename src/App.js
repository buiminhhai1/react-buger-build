import React ,{Component} from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom'
import {connect} from 'react-redux';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurderBuilder';
import AsyncComponent from './hoc/AsyncComponent/AsyncComponent';
import Logout from './containers/Auth/Logout/Logout';
import * as actions  from './store/actions/index';

const asyncOrders = AsyncComponent(()=>{
  return import('./containers/Orders/Orders');
})

const asyncCheckout = AsyncComponent(() => {
  return import('./containers/Checkout/Checkout');
});

const asyncAuth = AsyncComponent(() => {
  return import('./containers/Auth/Auth');
});

class App extends Component{
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render(){
    let routes = (
      <Switch>
        <Route path="/auth" component={asyncAuth} />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to="/" />
      </Switch>
      
    );
    if(this.props.isAuthenticated){
      routes = (
        <Switch>
          <Route path="/checkout" component={asyncCheckout} />
          <Route path="/orders" component={asyncOrders} />
          <Route path="/auth" component={asyncAuth} />
          <Route path="/logout" component={Logout} />
          <Route path="/" exact component={BurgerBuilder} />
          <Redirect to="/" />
        </Switch>
      );
    }

    return (
      <div>
        <Layout>
            {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
