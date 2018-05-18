import React, { Component } from 'react';
import './ColorPicker.css';

export default class ColorPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const COLORS = ['#ffffff', '#e27d5f', '#85cdca', '#e8a87c', '#c38d9d'];

    return (
      <div className="colorPicker">
        {COLORS.map(color => (
          <div
            key={color}
            className={this.props.color === color ? 'color selected' : 'color'}
            style={{ backgroundColor: color }}
            onClick={this.props.onColorChange.bind(null, color)}
          />
        ))}
      </div>
    );
  }
}
