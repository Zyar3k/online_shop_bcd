import axios from 'axios';
import {API_URL} from '../config';

const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;


/**********************************************************************/
/* product */
export const getProducts = ({ products }) => products.data;

/* request */
export const getRequest = ({ products }) => products.request;



/**********************************************************************/
/* product */
export const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');

/* request */
const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');



/**********************************************************************/
/* product */
export const loadProducts = payload => ({ payload, type: LOAD_PRODUCTS });

/* request */
export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });



/**********************************************************************/
const initialState = {
  data: [],
  request: {
    pending: false,
    error: null,
    success: null,
  },
};


/**********************************************************************/
export const loadProductsRequest = () => {
  return async dispatch => {

    dispatch(startRequest());
    try {      
      let res = await axios.get(`${API_URL}/products`);
      await new Promise((res, rej) => setTimeout(res, 2000));
      dispatch(loadProducts(res.data));
      dispatch(endRequest());
       
    } catch (error) {

      dispatch(errorRequest(error.message));
    }
  };
};



/**********************************************************************/
export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    /* product */
  	case LOAD_PRODUCTS:
      return  { ...statePart, data: action.payload };

    /* request */
    case START_REQUEST:
      return { ...statePart, request: { pending: true, error: null, success: false } };
    case END_REQUEST:
      return { ...statePart, request: { pending: false, error: null, success: true } };
    case ERROR_REQUEST:
      return { ...statePart, request: { pending: false, error: action.error, success: false } };

    default:
      return statePart;
  }
};