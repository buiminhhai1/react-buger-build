import React, {Component} from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {
    constructor(props){
        super(props);
        this.state = {
            ingredients:null,
            totalPrice: 4,
            purchaseable: false,
            purchasing: false,
            loading: false,
            error: false
        }
    }

    updatePurchaseBurger = (ingredients) =>{
        
        const sum = Object.keys(ingredients)
            .map(igKey =>{
                return ingredients[igKey]
            })
            .reduce((sum,el) =>{
                return sum + el;
            },0);

        this.setState({
            purchaseable: sum > 0
        });
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount + 1;
        const updatedIngredients = {...this.state.ingredients};

        updatedIngredients[type] = updateCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        });

        this.updatePurchaseBurger(updatedIngredients);
    }

    removeIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0)
            return;
        const updateCount = oldCount - 1;
        const updatedIngredients = {...this.state.ingredients};

        updatedIngredients[type] = updateCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAddition;

        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        });
        this.updatePurchaseBurger(updatedIngredients);
    }

    purchaseHandler = () => this.setState({purchasing: true});

    purchaseCancelHandler = () => this.setState({purchasing: false});

    purchaseContinueHandler = () => {
        
        const queryParams = [];
        for (let i in this.state.ingredients){
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
        }
        queryParams.push('price=' + this.state.totalPrice);
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        }); // go to the /checkout page
    }

    componentDidMount() {
        console.log(this.props);
        axios.get('https://react-my-burger-8c0f0.firebaseio.com/ingredients.json')
            .then(res => {
                this.setState({ingredients: res.data});
            })
            .catch(error =>{
                this.setState({error: true});
            });
    }

    render(){

        const disableInfo = {
            ...this.state.ingredients
        };
        
        for(let key in disableInfo){
            disableInfo[key] = disableInfo[key] <= 0
        }

        let orderSummary = null;

        let burger = this.state.error ? <p> Ingredients can't be loaded!</p> : <Spinner />;

        if(this.state.ingredients){
            burger = (
                <Aux>
                    <Burger ingredients={this.state.ingredients}/>
                    <BuildControls 
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemoved={this.removeIngredientHandler}
                        disabled={disableInfo}
                        price={this.state.totalPrice}
                        purchaseable={this.state.purchaseable}
                        ordered={this.purchaseHandler} />
                </Aux>      
            );
            orderSummary = <OrderSummary  
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler}
                ingredients={this.state.ingredients}
                price={this.state.totalPrice}/>;
        
        }
        
        if(this.state.loading){
            orderSummary = <Spinner/>
        }
        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}       
            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder,axios);