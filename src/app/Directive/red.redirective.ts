import { Directive, ElementRef, Input } from '@angular/core';
import { HostListener } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {
  color: string = '';

  @Input() defaultColor: string = 'green';
  @Input() appRed = '';

  constructor(
    private el: ElementRef
  ) {
    this.el.nativeElement.style.color = 'red';    
   }
}
