import axios from 'axios';

const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;


/**********************************************************************/
/* product */
export const getProducts = ({ products }) => products;



/**********************************************************************/
/* product */
export const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');



/**********************************************************************/
/* product */
export const loadProducts = payload => ({ payload, type: LOAD_PRODUCTS });



/**********************************************************************/
const initialState = [];


/**********************************************************************/
export const loadProductsRequest = () => {
  return async dispatch => {

    try {
      await axios
        .get('http://localhost:8000/api/products')
        .then(res => {
          dispatch(loadProducts(res.data));
        });
    } catch (error) {
      console.log(error.message);
    }
  }
};



/**********************************************************************/
export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    /* product */
  	case LOAD_PRODUCTS:
      return [ ...action.payload ];
    default:
      return statePart;
  }
};