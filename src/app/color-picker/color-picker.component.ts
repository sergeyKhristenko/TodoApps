import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  COLORS = ['#ffffff', 'rgb(226, 125, 95)', 'rgb(133, 205, 202)', 'rgb(232, 168, 124)', 'rgb(195, 141, 157)'];
  selectedColor: string;
  
  @Output() colorChange = new EventEmitter<string>();
  
  constructor() {}

  ngOnInit() {
  }

  changeColor(color) {
    this.colorChange.emit(color);
    this.selectedColor = color;
  }
}
