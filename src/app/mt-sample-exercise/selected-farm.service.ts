import { Injectable } from '@angular/core';
import * as data from './mock-data.json';

@Injectable({
  providedIn: 'root',
})
export class SelectedFarmService {
  getData() {
    console.log(data.default);
    console.log(typeof data);
    return data.default;
  }
}
