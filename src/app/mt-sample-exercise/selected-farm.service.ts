import { Injectable } from '@angular/core';
import * as data from './mock-data.json';

@Injectable({
  providedIn: 'root',
})
export class SelectedFarmService {
  public item: any;

  getData() {
    return data.default;
  }
  setItem(item: any) {
    this.item = item;
  }
  getItem() {
    return this.item;
  }
}
