import React, {Component} from 'react';
import FiltersList from './FiltersList';
import SearchBar from './SearchBar';

class FiltersPanel extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="filters-panel">
        <SearchBar />
        <FiltersList products={this.props.products} categories={this.props.categories}/>
      </div>
    );
  }
}

export default FiltersPanel;