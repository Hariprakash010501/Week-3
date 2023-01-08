import {combineReducers} from 'redux';
import { productReducer, selectedProductReducer } from './productReducer';
import { isAuth } from './authReducer';
export const reducers=combineReducers({
    allProducts:productReducer,
    product:selectedProductReducer,
    isAuth
})