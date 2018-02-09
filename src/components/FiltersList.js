import React, {Component} from 'react';
import FiltersCategory from './FiltersCategory';

export default class FiltersList extends Component {

  constructor(props) {
    super(props);
  }

  getPopulatedCategories() {
    let categories = {};

    this.props.products.forEach((product) => {
      Object.keys(product).forEach((category) => {
        // We only want to display filtering categories that are mentionned in the allowed categories list
        if (this.props.filteringCategories.indexOf(category) > 0) {
          categories[category] = categories[category] || {};
          // We want to make sure that we only display categories filters that exist in our products dataset
          // Some categories can have different values represented as an object so we need to store all these values as well
          if (typeof product[category] === 'object') {
            Object.keys(product[category]).forEach((productCategory) => {
              categories[category][productCategory] = categories[category][productCategory] + 1 || 1;
            });
          } else {
            categories[category][product[category]] = categories[category][product[category]] + 1 || 1;
          }
        }
      });
    });

    return categories
  }

  render() {
    let categories = this.getPopulatedCategories();

    categories = Object.keys(categories).map((category) => {
      console.log(categories[category]);
      return <FiltersCategory key={category} category={category} filters={categories[category]} />
    });

    return (
      <div className="filters-list">
        {categories}
      </div>
    );
  }
}