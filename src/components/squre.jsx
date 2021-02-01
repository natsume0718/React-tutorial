import React from 'react';

export default class Square extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { value,onClick } = this.props;
    return (
      <button
        className="square"
        onClick={() => onClick()}
      >
        {value}
      </button>
    );
  }
}

