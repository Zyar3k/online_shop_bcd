import axios from 'axios';
import {API_URL} from '../config';

const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;


/**********************************************************************/
/* product */
export const getProducts = ({ products }) => products.data;



/**********************************************************************/
/* product */
export const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');



/**********************************************************************/
/* product */
export const loadProducts = payload => ({ payload, type: LOAD_PRODUCTS });



/**********************************************************************/
const initialState = {
  data: [],
};


/**********************************************************************/
export const loadProductsRequest = () => {
  return async dispatch => {

    try {      
      let res = await axios.get(`${API_URL}/products`);
      dispatch(loadProducts(res.data));
       
    } catch (error) {

      console.log(error.message);
    }
  };
};



/**********************************************************************/
export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    /* product */
  	case LOAD_PRODUCTS:
      return  { ...statePart, data: action.payload };
    default:
      return statePart;
  }
};