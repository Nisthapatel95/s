import { Directive,ElementRef, Input,  } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {
  @Input() defaultColor = '';
  

  constructor(el:ElementRef) { 
    el.nativeElement.style.color="red"
     }
  }
