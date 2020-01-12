import { Component } from '@angular/core';
import { Test2PopupComponent } from './test2.popup.component';
import { PopupService } from '../../../../../../rmw-lib/src/lib/components/popup/popup.service';

@Component({
    template: `
        Test 1 popup component works!
        <button (click)="openAnotherPopup()">Open test 2 popup component</button>
    `
})
export class Test1PopupComponent {
    constructor(private popupService: PopupService) {}

    openAnotherPopup() {
        this.popupService.open(Test2PopupComponent);
    }
}
