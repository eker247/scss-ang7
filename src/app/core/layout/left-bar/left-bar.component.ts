import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.scss']
})
export class LeftBarComponent implements OnInit {
  private chosenLink = 'user';
  icoDashboard = `<circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />`;

  constructor(private _r: Router) { }

  ngOnInit() {
  }

  goTo(url: string): void {
    this.chosenLink = url;
    this._r.navigate([url]);
  }

  isActive(url: string): boolean {
    return this.chosenLink === url;
  }
}
