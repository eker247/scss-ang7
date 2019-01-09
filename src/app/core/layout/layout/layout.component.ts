import { Component, OnInit } from '@angular/core';
import { InterfaceService } from '../../service/interface.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  sidebar$ = this.is.sidebar$;

  constructor(public is: InterfaceService) { }

  ngOnInit() {
  }

}
