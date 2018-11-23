import React from 'react'

export default class Square extends React.Component {
  
  clickHandler = () => {
    this.props.handleClick(this.props.id);
  }
  
  render () {
    return (
      <div className={`square ${!this.props.faceup ? "hidden": ''}`} onClick={this.clickHandler}>
        <span>{this.props.value}</span>
      </div>
    );
  }
}
