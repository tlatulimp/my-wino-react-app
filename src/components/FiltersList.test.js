import React from 'react';
import { shallow } from 'enzyme';
import FiltersList from './FiltersList';

const dataWithUnusedCategories = {
  products: [
    {
      color: 'red',
      country: 'Italy'
    },
    {
      color: 'white',
      country: 'France'
    }
  ],
  categories: [
    'price',
    'color',
    'country'
  ]
};
const dataWithoutUnusedCategories = {
  products: [
    {
      price: '150€',
      color: 'red',
      country: 'Italy'
    },
    {
      price: '50€',
      color: 'white',
      country: 'France'
    }
  ],
  categories: [
    'price',
    'color',
    'country'
  ]
};

it('should return an array of the categories cleared of the unused categories', () => {
  const component = shallow(<FiltersList {...dataWithUnusedCategories} />).instance();

  const expectedCategories = ['color', 'country'];
  const actualCategories = component.getCategories();

  expect(actualCategories).toEqual(expectedCategories);
});

it('should return an array of the categories only containing allowed categories', () => {
  const component = shallow(<FiltersList {...dataWithUnusedCategories} />).instance();

  const expectedCategories = ['color', 'country'];
  const actualCategories = component.getCategories();

  expect(actualCategories).toEqual(expectedCategories);
});

it('should return an array of categories with the number of times they are found in the set of products', () => {
  const component = shallow(<FiltersList {...dataWithoutUnusedCategories} />).instance();

  const expectedCategories = dataWithoutUnusedCategories.categories;
  const actualCategories = component.getCategories();

  expect(actualCategories).toEqual(expectedCategories);
});