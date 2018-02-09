import React, {Component} from 'react';
import ProductsList from './ProductsList';
import FiltersPanel from './FiltersPanel';
import SortingSelect from './SortingSelect';

export default class FilterableProductsList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="filterable-products-list">
        <FiltersPanel products={this.props.products} filteringCategories={this.props.filteringCategories}/>
        <div className="sortable-products">
          <SortingSelect />
          <ProductsList products={this.props.products}/>
        </div>
      </div>
    );
  }
}
