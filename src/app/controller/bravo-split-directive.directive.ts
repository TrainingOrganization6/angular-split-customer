import { Directive, NgZone, ElementRef, Renderer2 } from '@angular/core';
import { SplitAreaDirective } from '../library/directive/splitArea.directive';
import { SplitComponent } from '../library/component/split.component';

@Directive({
  selector: 'bravo-split-area, [bravo-split-area]',
  exportAs: 'bravoSplitArea'
})
export class BravoSplitDirectiveDirective extends SplitAreaDirective {

  constructor(protected ngZone: NgZone,
              public elRef: ElementRef,
              protected renderer: Renderer2,
              protected split: SplitComponent) { 
      super(ngZone, elRef, renderer, split);
      this.renderer.addClass(this.elRef.nativeElement, 'as-split-area');
    }

}
