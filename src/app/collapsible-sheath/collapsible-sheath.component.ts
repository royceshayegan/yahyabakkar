import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'collapsible-sheath',
  templateUrl: './collapsible-sheath.component.html',
  styleUrls: ['./collapsible-sheath.component.scss']
})
export class CollapsibleSheathComponent implements OnInit {

  isExpanded = false

  constructor() { }

  ngOnInit() {
  }

}
