import React ,{Component} from 'react';
import {Route,Switch} from 'react-router-dom'
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurderBuilder';
import Checkout from './containers/Checkout/Checkout';
//import Orders from './containers/Checkout/Orders/Orders';
import AsyncComponent from './hoc/AsyncComponent/AsyncComponent';

const asyncComponent = AsyncComponent(()=>{
  return import('./containers/Checkout/Orders/Orders');
})

class App extends Component{
  render(){
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={asyncComponent} />
            <Route path="/" exact component={BurgerBuilder} />
            
          </Switch>
          
          
        </Layout>
      </div>
    );
  }
}
export default App;
