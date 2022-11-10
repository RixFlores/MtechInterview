import { Injectable } from '@angular/core';
import * as data from './mock-data.json';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getData() {
    return data.default;
  }
}
