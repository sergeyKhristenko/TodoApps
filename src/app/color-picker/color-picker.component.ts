import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  COLORS = ['rgb(226, 125, 95)', 'rgb(133, 205, 202)', 'rgb(232, 168, 124)', 'rgb(195, 141, 157)'];
  constructor() { }

  ngOnInit() {
  }

}
