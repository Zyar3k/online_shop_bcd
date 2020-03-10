import React from 'react';

class ProductsAmount extends React.Component {

  render() {

    const { quantity } = this.props;

    return(
      <div>
        <div>
          Products available: {quantity > 0 ? quantity : '0'}
        </div>
      </div>
    );
  };
};

export default ProductsAmount;