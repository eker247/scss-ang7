import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-left-bar-item',
  templateUrl: './left-bar-item.component.html',
  styleUrls: ['./left-bar-item.component.scss']
})
export class LeftBarItemComponent implements OnInit {
  @Input() active: boolean;
  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}
