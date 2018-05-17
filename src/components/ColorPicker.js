import React, { Component } from 'react';
import './ColorPicker.css';

export default class ColorPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const COLORS = ['#e27d5f', '#85cdca', '#e8a87c', '#c38d9d', '#40b3a2'];

    return (
      <div className="colorPicker">
        {COLORS.map(color => 
          <div 
            key={color} 
            className="color" 
            style={{ backgroundColor: color }} 
            onClick={this.props.onColorChange.bind(null, color)}
          />)}
      </div>
    );
  }
}
