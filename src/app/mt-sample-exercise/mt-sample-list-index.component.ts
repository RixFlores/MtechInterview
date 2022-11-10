import { Component } from '@angular/core';
import { DataService } from './data.service';
import { SelectedFarmService } from './selected-farm.service';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Farm } from './farm';

@Component({
  selector: 'mt-sample-list',
  templateUrl: './mt-sample-list-index.component.html',
})
export class MtSampleListIndexComponent {
  public filterList: Array<string> = ['All','Active Date', 'No'];
  public filterSelected: string = '';
  public dataFiltered: Array<any> = [];

  constructor(private readonly selectedFarm: SelectedFarmService) {}

  searchData() {
    this.dataFiltered = (this.selectedFarm.getData())
   /*  console.log(typeof this.dataFiltered);

    console.log(this.dataFiltered[0].FarmName)
    console.log(this.dataFiltered[0].FarmNo)
    console.log(this.dataFiltered[0].ActiveDate) */
  }
}
