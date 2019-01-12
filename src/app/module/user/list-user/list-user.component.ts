import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlTree, UrlSegmentGroup, UrlSegment, PRIMARY_OUTLET } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  constructor(private _ar: ActivatedRoute, private _r: Router) { }

  ngOnInit() {
    // // console.log(this._ar.routeConfig.data['breadcrumb']);
    // const tree: UrlTree = this._r.parseUrl(this._r.routerState.snapshot.url);
    // const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
    // const s: UrlSegment[] = g.segments;
    // console.log(s);
  }

}
