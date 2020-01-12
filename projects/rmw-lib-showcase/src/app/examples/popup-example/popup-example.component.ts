import { Component, OnInit } from '@angular/core';
import { Test1PopupComponent } from './popup-test-components/test1.popup.component';
import { PopupService } from '../../../../../rmw-lib/src/lib/components/popup/popup.service';

@Component({
    selector: 'app-popup-example',
    templateUrl: './popup-example.component.html',
    styleUrls: ['./popup-example.component.less']
})
export class PopupExampleComponent implements OnInit {
    constructor(private popupService: PopupService) {}

    ngOnInit() {}

    openPopup() {
        this.popupService.open(Test1PopupComponent);
    }
}
