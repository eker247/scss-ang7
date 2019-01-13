import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  constructor(private _conf: NgbCarouselConfig) { }

  ngOnInit() {
    this._conf.showNavigationArrows = true;
    this._conf.showNavigationIndicators = true;
    this._conf.interval = 3000;
    this._conf.pauseOnHover = true;
  }

}
