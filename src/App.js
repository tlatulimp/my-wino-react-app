import React, {Component} from 'react';
import FilterableProductsList from './components/FilterableProductsList';
import './App.css';

class App extends Component {
  data = {
    products: [
      {
        id: 1,
        name: 'Brune et Blonde',
        wineGrower: 'Etienne Guigal',
        domain: 'Guigal',
        vintage: 2013,
        color: 'red',
        region: 'Rhones',
        cepages: {
          syrah: 95,
          viognier: 5
        },
        designation: 'côte rôtie',
        country: 'France',
        price: '40€',
        ratings: {
          wineAdvocate: 92,
          vinosophe: 88,
          vivino: 97
        }
      },
      {
        id: 2,
        name: 'La Sereine noire',
        wineGrower: 'Yves Gangloff',
        domain: 'Domaine Yves Gangloff',
        vintage: 1999,
        color: 'red',
        region: 'Rhones',
        cepages: 'syrah',
        designation: 'côte rôtie',
        country: 'France',
        price: '140€',
        ratings: {
          wineAdvocate: 96,
          vinosophe: 92,
          vivino: 95
        }
      },
      {
        id: 3,
        name: 'Castel Viel',
        wineGrower: 'Domaine des Près Lasses',
        domain: 'Domaine des Près Lasses',
        vintage: 2005,
        color: 'red',
        region: 'Languedoc',
        cepages: 'grenache',
        designation: 'faugères',
        country: 'France',
        price: '25€',
        ratings: {
          vivino: 90
        }
      },
      {
        id: 4,
        name: 'Brune et Blonde',
        wineGrower: 'Etienne Guigal',
        domain: 'Guigal',
        vintage: 2013,
        color: 'red',
        region: 'Rhones',
        cepages: {
          syrah: 95,
          viognier: 5
        },
        designation: 'côte rôtie',
        country: 'France',
        price: '40€',
        ratings: {
          wineAdvocate: 92,
          vinosophe: 88,
          vivino: 97
        }
      },
      {
        id: 5,
        name: 'La Sereine noire',
        wineGrower: 'Yves Gangloff',
        domain: 'Domaine Yves Gangloff',
        vintage: 1999,
        color: 'red',
        region: 'Rhones',
        cepages: 'syrah',
        designation: 'côte rôtie',
        country: 'France',
        price: '140€',
        ratings: {
          wineAdvocate: 96,
          vinosophe: 92,
          vivino: 95
        }
      },
      {
        id: 6,
        name: 'Castel Viel',
        wineGrower: 'Domaine des Près Lasses',
        domain: 'Domaine des Près Lasses',
        vintage: 2005,
        color: 'red',
        region: 'Languedoc',
        cepages: 'grenache',
        designation: 'faugères',
        country: 'France',
        price: '25€',
        ratings: {
          vivino: 90
        }
      }
    ],
    categories: [
      'vintage',
      'color',
      'region',
      'designation',
      'price',
      'ratings',
      'country',
      'cepages'
    ]
  };

  render() {
    return (
      <FilterableProductsList products={this.data.products} categories={this.data.categories}/>
    );
  }
}

export default App;
