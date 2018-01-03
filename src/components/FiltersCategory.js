import React, {Component} from 'react';
import Filter from './Filter';

class FiltersCategory extends Component {

  constructor(props) {
    super(props);

    console.log('filtersCategory', props);
  }

  render() {

    return (
      <ul className="filters-category">
        <li className="filters-category__title">{this.props.category}</li>
      </ul>
    );
  }
}

export default FiltersCategory;