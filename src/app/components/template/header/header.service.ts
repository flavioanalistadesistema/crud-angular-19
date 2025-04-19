import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import HeaderModule from './header.module';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _headerDatsa = new BehaviorSubject<HeaderModule>({
    title: 'Início',
    icon: 'home',
    routeUrl: ''
  });

  constructor() { }

  get headerData(): HeaderModule {
    return this._headerDatsa.value;
  }

  set headerData(headerData: HeaderModule) {
    this._headerDatsa.next(headerData);
  }
}
