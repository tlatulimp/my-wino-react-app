import React, {Component} from 'react';

export default class SearchBar extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="search">
        Filtrer par mots-clés:
        <input type="search"/>
      </div>
    );
  }
}
