import React, {Component} from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <input className="search-bar" type="search"/>
    );
  }
}

export default SearchBar;