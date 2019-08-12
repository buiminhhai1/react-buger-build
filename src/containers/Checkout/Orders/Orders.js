import React, {Component} from 'react';
import Order from '../../../components/Order/Order';
import axios from '../../../axios-orders';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../../components/UI/Spinner/Spinner';


class Orders extends Component {
    state ={
        orders: [],
        loading: true,
    }
    componentDidMount(){
        axios.get('/orders.json')
            .then(response => {
                const fetchOrders = [];
                for(let key in response.data){
                    fetchOrders.push({
                        ...response.data[key],
                        id: key
                    });
                }
                this.setState({orders: fetchOrders,
                    loading: false});
            })
            .catch(err => {
                this.setState({loading: false});
            });
    }

    render(){
        let tempOrder;
        if(this.state.loading){
            tempOrder = <Spinner/>
        } else {
            tempOrder = this.state.orders.map(order => (
                <Order 
                key={order.id}
                ingredients={order.ingredients}
                price={+order.price}/>));
        } 
        return(<div>
            {tempOrder}
        </div>);
    }
}
export default withErrorHandler(Orders, axios);