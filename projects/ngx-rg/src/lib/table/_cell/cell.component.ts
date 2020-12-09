import { getDescendantProp } from './../../_core/utils';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rg-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {

  @Input() header;
  @Input() row;
  @Input() template;

  getDescendantProp = getDescendantProp;

  constructor() { }

  ngOnInit(): void {
  }

}
