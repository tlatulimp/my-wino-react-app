import React, {Component} from 'react';
import FiltersList from './FiltersList';
import SearchBar from './SearchBar';

export default class FiltersPanel extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="filters-panel">
        <SearchBar />
        <FiltersList products={this.props.products} filteringCategories={this.props.filteringCategories}/>
      </div>
    );
  }
}
