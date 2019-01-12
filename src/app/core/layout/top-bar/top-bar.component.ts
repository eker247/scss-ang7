import { Component, OnInit } from '@angular/core';
import { InterfaceService } from '../../service/interface.service';
import { concat, of, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  clock$ = concat (
    of(this.getTime()),
    interval(1000).pipe(map(() => this.getTime()))
  );

  constructor(public is: InterfaceService) { }

  ngOnInit() { }

  getTime(): string {
    return new Date(Date.now()).toLocaleString().substr(11, 8);
  }
}
