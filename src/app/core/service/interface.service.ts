import { Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterfaceService {
  private _currenWindowWidth = new BehaviorSubject<string>(this.getWindowWidth());
  private _sidebar = new BehaviorSubject<boolean>(true);
  public windowWidth$ = this._currenWindowWidth.asObservable();
  public sidebar$ = this._sidebar.asObservable();

  constructor() {
    this.observeWidth();
  }

  observeWidth(): void {
    fromEvent(window, 'resize').subscribe(() => {
      const width = this.getWindowWidth();
      this._currenWindowWidth.next(width);
      this._sidebar.next(width !== 'xs');
    });
  }

  toggleSidebar() {
    this._sidebar.next(!this._sidebar.value);
  }

  getWindowWidth(): string {
    if (window.innerWidth < 576) {
      return 'xs';
    } else if (window.innerWidth < 768) {
      return 'sm';
    } else if (window.innerWidth < 992) {
      return 'md';
    } else if (window.innerWidth < 1200) {
      return 'lg';
    } else {
      return 'xl';
    }
  }
}
