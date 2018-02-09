import React, {Component} from 'react';

export default class SortingSelect extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="sorting-select">
        Sort by:
        <select />
      </div>
    );
  }
}
