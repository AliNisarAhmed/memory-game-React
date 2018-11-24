import React from 'react'
import classNames from 'classnames';

export default class Square extends React.Component {
  
  clickHandler = () => {
    if (!this.props.guessed || !this.props.faceup) {
      this.props.handleClick(this.props.id);
    }
  }
  
  render () {

    let squareClass = classNames({
      square: true,
      hidden: !this.props.faceup,
      guessed: this.props.guessed,
    })

    return (
      <div className={squareClass} onClick={this.clickHandler}>
        <span>{this.props.faceup && this.props.value}</span>
      </div>
    );
  }
}
