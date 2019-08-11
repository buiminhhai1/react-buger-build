import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
class ContactData extends Component {
    state={
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault(); // Don't send request (because we have a submit form)
       
        // totalPrice have to calcute in the backend to user user isn't manipulating the code before sending it 
        this.setState({loading: true})
        const order = {
          ingredients: this.props.ingredients,
          price: this.props.price, 
          customer: {
              name:"Minh Hai",
              address: {
                  street: 'Ton That Thuyet',
                  zipCode: '70000',
                  country: 'VietNam'
              },
              email:'ngovietduc20088@gmail.com'
          },
          deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false})
                //console.log(response);
                this.props.history.push("/");
                
            })
            .catch(err =>{
                this.setState({loading: false})
                console.log(err);
            });
    }

    render(){
        let form = (<form>
            <input className={classes.Input}type="text" name="name" placeholder="Your name" />
            <input className={classes.Input}type="email" name="email" placeholder="Your email" />
            <input className={classes.Input}type="text" name="street" placeholder="Street" />
            <input className={classes.Input}type="text" name="postal" placeholder="Postal Code" />
            <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
        </form>);
        if(this.state.loading){
            form = <Spinner />
        }  

        return(
            <div className={classes.ContactData}>
                <h4>Enter you Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;