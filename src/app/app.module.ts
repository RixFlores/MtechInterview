import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { SF_MODULES } from "./sf-modules";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { MtSampleNavComponent } from "./mt-sample-exercise/mt-sample-nav.component";
import { SAMPLE_COMPONENTS } from "./mt-sample-exercise";
import { MtAutoCompleteComponent } from "./mt-autocomplete/mt-autocomplete.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SF_MODULES,
    RouterModule.forRoot([
      { path: "list-detail", component: MtSampleNavComponent },
      { path: "auto-complete", component: MtAutoCompleteComponent }
    ])
  ],
  declarations: [AppComponent, HelloComponent, SAMPLE_COMPONENTS, MtAutoCompleteComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
