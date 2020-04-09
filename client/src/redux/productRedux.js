import axios from 'axios';
import { API_URL } from '../config';
import { BASE_URL } from '../config';

const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;


/**********************************************************************/
/* product */
export const getProducts = ({ products }) => products.data;
export const getProduct = ({ products }) => products.product;

/* amount of products */
export const getAmountOfProducts = ({ products }) => products.data.length;

/* request */
export const getRequest = ({ products }) => products.request;

/* product sort */
export const getProductsSort = ({ products }) => {
  const sortProducts = [...products.data].sort((a, b) => {
       if (a[products.key] > b[products.key]) return products.direction === 'asc' ? 1 : -1;
       if (a[products.key] < b[products.key]) return products.direction === 'asc' ? -1 : 1;
       return 0;
  });
  return sortProducts;
};

/* cart */
export const getCart = ({ products }) => products.cart;
export const getPrice = ({ products }) => products.price;


/**********************************************************************/
/* product */
export const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');
export const LOAD_PRODUCT = createActionName('LOAD_PRODUCT');

/* request */
const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

/* product sort */
export const SORT_OPTIONS = createActionName('SORT_OPTIONS');

/* cart */
export const ADD_PRODUCT_CART = createActionName('ADD_PRODUCT_CART');
export const PLUS_PRODUCT_CART = createActionName('PLUS_PRODUCT_CART');
export const CALCULATE_PRICE = createActionName('CALCULATE_PRICE');
export const DELETE_CART_PRODUCT = createActionName('DELETE_CART_PRODUCT');
export const PLUS_CART_PRODUCT = createActionName('PLUS_CART_PRODUCT');
export const REMOVE_CART_PRODUCT = createActionName('REMOVE_CART_PRODUCT');



/**********************************************************************/
/* product */
export const loadProducts = payload => ({ payload, type: LOAD_PRODUCTS });
export const loadProduct = payload => ({ payload, type: LOAD_PRODUCT });

/* request */
export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });

/* product sort */
export const sortOptions = payload => ({ payload, type: SORT_OPTIONS });

/* cart */
export const addProductCart = payload => ({ payload, type: ADD_PRODUCT_CART });
export const plusProductCart = id => ({id, type: PLUS_PRODUCT_CART});
export const calculatePrice = () => ({ type: CALCULATE_PRICE });
export const deleteCartProduct = payload => ({ payload, type: DELETE_CART_PRODUCT});
export const plusCartProduct = id => ({ id, type: PLUS_CART_PRODUCT});
export const removeCartProduct = id => ({ id, type: REMOVE_CART_PRODUCT});



/**********************************************************************/
const initialState = {
  data: [],
  request: {
    pending: false,
    error: null,
    success: null,
  },
  product: [],
  cart: [],
  price: 0,
  key: '',
  direction: '',
};


/**********************************************************************/
export const loadProductsRequest = () => {
  return async dispatch => {

    dispatch(startRequest());
    try {      
      let res = await axios.get(`${BASE_URL}${API_URL}/products`);
      // await new Promise((res, rej) => setTimeout(res, 2000)); // turn on after work
      dispatch(loadProducts(res.data));
      dispatch(endRequest());
       
    } catch (error) {

      dispatch(errorRequest(error.message));
    }
  };
};

export const loadProductRequest = (id) => {
  return async dispatch => {

    dispatch(startRequest());
    try {
      let res = await axios.get(`${BASE_URL}${API_URL}/product/${id}`);
      // await new Promise((res, rej) => setTimeout(res, 1000));
      dispatch(loadProduct(res.data));
      dispatch(endRequest());
    } catch(error) {
      dispatch(errorRequest(error.message));
    };
  };
};



/**********************************************************************/
export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    /* product */
  	case LOAD_PRODUCTS:
      return  { ...statePart, data: action.payload };
    case LOAD_PRODUCT:
      return  { ...statePart, product: action.payload };

    /* request */
    case START_REQUEST:
      return { ...statePart, request: { pending: true, error: null, success: false } };
    case END_REQUEST:
      return { ...statePart, request: { pending: false, error: null, success: true } };
    case ERROR_REQUEST:
      return { ...statePart, request: { pending: false, error: action.error, success: false } };

    /* product sort */
    case SORT_OPTIONS:
      return {...statePart,  
        key: action.payload.key, 
        direction: action.payload.direction,
      };

    /* cart */
    case ADD_PRODUCT_CART:
      const productAdded = action.payload;
      productAdded.quantity += 1;
      return {
        ...statePart, cart: statePart.cart.concat(productAdded), orderState: false
      };
    case PLUS_PRODUCT_CART:
      const prodCartAdd = statePart.cart.find(idx => idx.id === action.id);
      prodCartAdd.quantity += 1;
      const plusProdCart = statePart.cart.map(idx => idx.id === action.id ? prodCartAdd : idx);
      return { ...statePart, cart: plusProdCart};

    case DELETE_CART_PRODUCT:
      const deleteCartProduct = statePart.cart.filter(idx => idx.id !== action.payload);
      return { ...statePart, cart: deleteCartProduct };

    case PLUS_CART_PRODUCT:
      const plusCartProd = statePart.cart.find(idx => idx.id === action.id);
      plusCartProd.quantity += 1;
      const plusCartCur = statePart.cart.map(idx => idx.id === action.id ? plusCartProd : idx);
      return {...statePart, cart: plusCartCur }

    case REMOVE_CART_PRODUCT:
      const removeCartProd = statePart.cart.find(idx => idx.id === action.id);
      removeCartProd.quantity -= 1;
      const removeCartCur = statePart.cart.map(idx => idx.id === action.id ? removeCartProd : idx);
      return { ...statePart, cart: removeCartCur}


    case CALCULATE_PRICE:
      let roundPrice;
      if (statePart.cart.length !== 0) {
        const fullPrice = statePart.cart.map(idx => idx.price * idx.quantity);
        const sumPrice = fullPrice.reduce((prev, curr) => prev + curr);
        roundPrice = parseFloat(sumPrice.toFixed(2));
      } else {
        roundPrice = 0;
      }
      return { ...statePart, price: roundPrice };

    default:
      return statePart;
  }
};