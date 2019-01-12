import { Injectable } from '@angular/core';
import { Router, UrlTree, UrlSegmentGroup, UrlSegment, PRIMARY_OUTLET, NavigationEnd } from '@angular/router';
import { fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  constructor(private _r: Router) {
    this._r.events.subscribe((val) => {
      // see also
      if (val instanceof NavigationEnd) {
        this.parseUrl(val.url);
      }
    });
    // fromEvent(window, 'click').subscribe(r => console.log(r));
  }

  parseUrl(url: string) {
    // console.log(this._ar.routeConfig.data['breadcrumb']);
    console.log('Current URL:');
    if (url.length < 2) {
      return;
    }
    const tree: UrlTree = this._r.parseUrl(url);
    const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
    const s: UrlSegment[] = g.segments;
    s.forEach(u => {
      console.log(u.path);
    });
  }
}
