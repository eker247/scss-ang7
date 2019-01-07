import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-div',
  templateUrl: './page-div.component.html',
  styleUrls: ['./page-div.component.scss']
})
export class PageDivComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
