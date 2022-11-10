import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dinamicComponent]',
})
export class farmDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}