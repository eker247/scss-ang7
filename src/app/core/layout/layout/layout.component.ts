import { Component, OnInit } from '@angular/core';
import { InterfaceService } from '../../service/interface.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  small$ = this.ui.windowWidth.pipe(map(r => r !== 'S'));

  constructor(public ui: InterfaceService) { }

  ngOnInit() {
  }

}
