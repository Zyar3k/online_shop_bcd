import { connect } from 'react-redux';
import { getCart } from '../../../redux/productRedux';
import NavMenu from './NavMenu';

const mapStateToProps = state => ({
    cart: getCart(state),
});


export default connect(mapStateToProps)(NavMenu);