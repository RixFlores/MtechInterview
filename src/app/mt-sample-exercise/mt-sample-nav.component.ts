import { Component } from '@angular/core';
import { DataService } from './data.service';
import { SelectedFarmService } from './selected-farm.service';

@Component({
  selector: 'mt-sample-nav',
  templateUrl: './mt-sample-nav.component.html',
  providers: [
    DataService,
    SelectedFarmService
  ]
})
export class MtSampleNavComponent { }