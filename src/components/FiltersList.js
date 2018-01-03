import React, {Component} from 'react';
import FiltersCategory from './FiltersCategory';

class FiltersList extends Component {

  constructor(props) {
    super(props);

    console.log('filtersList', props);
  }

  render() {
    let allowedCategories = new Set(this.props.categories);
    let products = new Set(this.props.products);
    let categories = new Set([...allowedCategories].filter(x => products.has(x)));
    console.log(categories);

    //let categoriesMarkup = categories.map((category) => {
    //  return <FiltersCategory key={category} category={category}/>
    //});

    return (
      <div className="filters-list">

      </div>
    );
  }
}

export default FiltersList;