import React, {Component} from 'react';
import Filter from './Filter';

export default class FiltersCategory extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const filters = Object.keys(this.props.filters).map((filter) => {
      return <Filter filter={filter} count={this.props.filters[filter]}/>
    });

    return (
      <ul className="filters-category">
        <li className="filters-category__title">{this.props.category}</li>
        {filters}
      </ul>
    );
  }
}
