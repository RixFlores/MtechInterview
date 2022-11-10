import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DataService } from './data.service';
import { SelectedFarmService } from './selected-farm.service';
import { from, Observable, Subject, throwError } from 'rxjs';
import { catchError, filter, map, takeUntil } from 'rxjs/operators';
import { Farm } from './farm';
import { farmDirective } from './farm.directive';
import { MtSampleDetailComponent } from './mt-sample-detail.component';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'mt-sample-list',
  templateUrl: './mt-sample-list-index.component.html',
})
export class MtSampleListIndexComponent implements OnInit {
  @ViewChild(farmDirective, { static: true }) dynamicComponent!: farmDirective;
  public filterList: Array<string> = ['All', 'Active Date', 'No'];
  public filterSelected: string = 'All';
  public dataFiltered!: Observable<any>;
  public data: Array<Farm> = [];

  constructor(
    private selectedFarm: SelectedFarmService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.searchData();
  }

  searchData() {
    this.data = [];
    this.dataFiltered = from(this.selectedFarm.getData());
    this.dataFiltered.subscribe(
      (success) => {
        if (this.filterSelected == 'Active Date') {
          if (success.ActiveDate.includes('2020')) {
            this.data.push(success);
          }
        } else if (this.filterSelected == 'No') {
          const first3 = success.FarmNo;
          const starts = first3.slice(0, 3);
          if (starts == '100') {
            this.data.push(success);
          }
        } else {
          this.data.push(success);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
  setItem(data: any) {
    this.selectedFarm.setItem(data);
    const component = this.componentFactoryResolver.resolveComponentFactory(
      MtSampleDetailComponent
    );
    this.dynamicComponent.viewContainerRef.clear();
    this.dynamicComponent.viewContainerRef.createComponent(component);
  }

  errorResponse() {
    console.log('LLEGUE');
    return this.http
      .get('https://skepsi.azurewebsites.net/api/groups', {})
      .pipe(
        map((resp) => resp),
        catchError((err) => {
          console.warn(err);
          console.log('sucedio un error');
          return throwError('API ERROR');
        })
      );
  }
}
