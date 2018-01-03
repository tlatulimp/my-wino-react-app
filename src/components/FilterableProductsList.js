import React, {Component} from 'react';
import ProductsList from './ProductsList';
import FiltersPanel from './FiltersPanel';

class FilterableProductsList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="filterable-products-list">
        <FiltersPanel products={this.props.products} categories={this.props.categories}/>
        <ProductsList products={this.props.products}/>
      </div>
    );
  }
}

export default FilterableProductsList;