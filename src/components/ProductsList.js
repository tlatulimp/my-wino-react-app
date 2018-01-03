import React, {Component} from 'react';
import Product from './Product';

class ProductsList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const products = this.props.products.map((product) => {
      return <Product key={product.id} product={product}/>;
    });

    return (
      <ul className="products-list">
        {products}
      </ul>
    );
  }
}

export default ProductsList;