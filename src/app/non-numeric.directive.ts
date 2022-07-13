import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNonNumeric]'
})
export class NonNumericDirective {

  constructor(private element: ElementRef) { }

  @HostListener('keydown', ['$event'])
  onKeydown(event: any) {
    const numberRegex = /[0-9]/;

    if (numberRegex.test(event.key)) {
      event.preventDefault();
    }
  }

}
