import { Directive, Input } from '@angular/core';
declare const wijsplitter: any;

@Directive({
  selector: 'as-split-area, [as-split-area]',
  exportAs: 'asSplitArea'
})
export class AngularSplitDirectiveDirective {

  constructor() { }
  
  private _direction: 'horizontal' | 'vertical' = 'horizontal';

    
}
