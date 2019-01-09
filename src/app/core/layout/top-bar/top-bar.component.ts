import { Component, OnInit } from '@angular/core';
import { InterfaceService } from '../../service/interface.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  constructor(public is: InterfaceService) { }

  ngOnInit() {
  }

}
