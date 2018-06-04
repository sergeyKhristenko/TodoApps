import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent {
  COLORS = ['#ffffff', 'rgb(226, 125, 95)', 'rgb(133, 205, 202)', 'rgb(232, 168, 124)', 'rgb(195, 141, 157)'];

  @Input() selectedColor: string;
  @Output() colorChange = new EventEmitter<string>();

  changeColor(color) {
    this.colorChange.emit(color);
    this.selectedColor = color;
  }
}
