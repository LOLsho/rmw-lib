import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[rmwDelayedIf]'
})
export class DelayedIfDirective {
    isFirstTime = true;
    currentCondition: boolean;
    timeout;

    @Input('libDelayedIf')
    set condition(newCondition: boolean) {
        newCondition = Boolean(newCondition);
        console.log('this.timeout:', this.timeout);

        console.log('newCondition:', newCondition);

        if (this.isFirstTime) {
            this.isFirstTime = false;

            if (newCondition) {
                this.viewContainer.createEmbeddedView(this.templateRef);
            } else {
                this.viewContainer.clear();
            }
        } else {
            if (newCondition === this.currentCondition) {
                return;
            }

            if (newCondition) {
                if (this.timeout) {
                    clearTimeout(this.timeout);
                } else {
                    this.viewContainer.createEmbeddedView(this.templateRef);
                }
            } else {
                this.timeout = setTimeout(() => {
                    this.timeout = null;
                    this.viewContainer.clear();
                }, this.delay);
            }
        }

        this.currentCondition = newCondition;
        // console.log('condition:', condition);
        // console.log('this.elementRef:', this.elementRef.nativeElement.display);
        // // this.elementRef.nativeElement.
        // if ()
        // this.elementRef.nativeElement.style.display = condition ? 'block' : 'none';
    }

    @Input()
    delay = 300;

    constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}

    showOrHide(condition: boolean) {}
}
