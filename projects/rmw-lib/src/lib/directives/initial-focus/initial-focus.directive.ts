import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[rmwInitialFocus]'
})
export class InitialFocusDirective implements AfterViewInit {
    constructor(private elementRef: ElementRef) {}

    ngAfterViewInit() {
        if (this.elementRef) {
            setTimeout(() => {
                this.elementRef.nativeElement.focus();
            });
        }
    }
}
