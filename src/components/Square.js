import React from 'react'
import classNames from 'classnames';

export default class Square extends React.Component {
  
  state = {
    frozen: false
  }

  clickHandler = () => {
    if (!this.state.frozen && (!this.props.guessed || !this.props.faceup)) {
      this.props.handleClick(this.props.id);
    }
  }

  static getDerivedStateFromProps(props) {
    if (props.faceup) {
      return {
        frozen: true
      };
    } else {
      return {
        frozen: false
      }
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
