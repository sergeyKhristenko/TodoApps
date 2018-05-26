import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  private COLORS = ['#ffffff', 'rgb(226, 125, 95)', 'rgb(133, 205, 202)', 'rgb(232, 168, 124)', 'rgb(195, 141, 157)'];
  public selected = 0;

  @Output() colorChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  changeColor(index) {
    this.colorChange.emit(this.COLORS[index]);
    this.selected = index;
  }
}
