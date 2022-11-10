import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as data from './mock-data.json';

@Injectable({
  providedIn: 'root',
})
export class SelectedFarmService {
  public item: any;

  constructor(private http: HttpClient) {}
  getData() {
    return data.default;
  }
  setItem(item: any) {
    this.item = item;
  }
  getItem() {
    return this.item;
  }
  getError(): Observable<any> {
    return this.http.get('https://reqres.in/api/');
  }
}
