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

    const { value, id, faceup, guessed, handleClick } = this.props;

    let squareClass = classNames({
      square: true,
      // hidden: !this.props.faceup,
      // clicked: this.props.faceup
    });

    let frontClass = classNames({
      front:  true,
      frontClicked: !faceup,
      side: true,
    })

    let backClass = classNames({
      side: true,
      backClicked: faceup,
      back: true,
      guessed: guessed,
      // clicked: this.props.faceup
    })

    return (
      <div className={squareClass} onClick={this.clickHandler}>
        <div className={frontClass}></div>
        <div className={backClass}>{this.props.value}</div>
      </div>
    );
  }
}


//this.props.faceup && 