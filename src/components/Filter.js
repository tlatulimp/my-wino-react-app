import React, {Component} from 'react';

export default class Filter extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="filters-item">
        {this.props.filter} ({this.props.count})
      </li>
    );
  }
}
