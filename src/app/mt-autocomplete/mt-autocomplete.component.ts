import { Component, OnInit, ViewChild } from "@angular/core";
import { DataManager } from "@syncfusion/ej2-data";
import { MockData } from "./mock-data";
import {
  FieldSettingsModel,
  FilteringEventArgs,
  ComboBox
} from "@syncfusion/ej2-dropdowns";
import {} from  '@syncfusion/'
import Fuse from "fuse.js";

@Component({
  templateUrl: "./mt-autocomplete.component.html",
  selector: "mt-auto-complete"
})
export class MtAutoCompleteComponent implements OnInit {
  label = "select a value";
  fields: FieldSettingsModel = { text: "Game", value: "Game" };
  autoCompleteDataSource: DataManager;
  filteredAutoCompleteDataSource: DataManager;
  data = MockData.sportsData;

  fieldProductsData = MockData.fieldProducts;
  fieldProductsDataSource: DataManager;
  filteredFieldProductsDataSource: DataManager;
  fieldProductsFields: FieldSettingsModel = {
    text: "productNo",
    value: "productNo"
  };

  @ViewChild('sports', {static:true}) private comboBox: ComboBox;
  fuseSearch: Fuse<any>;

  ngOnInit() {
    this.comboBox.text = 'Badminton';
    this.comboBox.value = 'Badminton';
    this.autoCompleteDataSource = new DataManager(this.data);
    this.fieldProductsDataSource = new DataManager(this.fieldProductsData);
    
  }

  onFiltering(args: FilteringEventArgs) {
    this.fuseSearch = new Fuse<any>(this.fieldProductsData, {
      keys: ["productNo", "description"],
      threshold: 0.1
    });
    // const result = this.fuseSearch.search(args.text);
    // console.log(result);
    args.updateData(new DataManager(this.fuseSearch.search(args.text)));
  }
}
