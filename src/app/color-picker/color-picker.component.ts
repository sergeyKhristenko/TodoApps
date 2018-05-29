import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  private COLORS = ['#ffffff', 'rgb(226, 125, 95)', 'rgb(133, 205, 202)', 'rgb(232, 168, 124)', 'rgb(195, 141, 157)'];
  
  @Output() colorChange = new EventEmitter<string>();
  
  public selectedColor: string;
  
  constructor() {}

  ngOnInit() {
  }

  changeColor(color) {
    this.colorChange.emit(color);
    this.selectedColor = color;
  }
}
