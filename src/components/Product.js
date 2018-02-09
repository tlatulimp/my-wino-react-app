import React, {Component} from 'react';

export default class Product extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="product-item">
        <h4 className="product-title">
          {this.props.product.name}
        </h4>
        <div className="product-domain">
          {this.props.product.domain}
        </div>
        <div className="product-vintage">
          {this.props.product.vintage}
        </div>
        <div className="product-color">
          {this.props.product.color}
        </div>
      </li>
    );
  }
}
