import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const addIngredient = (ingName) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: ingName
    };
};

export const removeIngredient = (ingName) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: ingName
    };
};

export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    };
};

export const fetchIngredientsFailed = () => { 
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    };
};

export const initIngredientStart = () => {
    return {
        type: actionTypes.INIT_INGREDIENTS_START
    };
};

export const initIngredients = () => {
    return dispatch => {
        dispatch(initIngredientStart());
        axios.get('https://react-my-burger-8c0f0.firebaseio.com/ingredients.json')
        .then(res => {
           dispatch(setIngredients(res.data));
        })
        .catch(error =>{
            dispatch(fetchIngredientsFailed());
        });
    };
};