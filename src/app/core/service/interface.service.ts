import { Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterfaceService {
  windowWidth: BehaviorSubject<string>;

  constructor() {
    this.windowWidth = new BehaviorSubject<string>(this.getWindowSize());
    fromEvent(window, 'resize').subscribe(() => this.windowWidth.next(this.getWindowSize()));
  }

  getWindowSize() {
    if (window.innerWidth < 961) {
      return 'S';
    } else if (window.innerWidth < 1281) {
      return 'M';
    } else {
      return 'L';
    }
  }
}
