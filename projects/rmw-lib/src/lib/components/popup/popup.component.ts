import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    HostListener,
    OnInit,
    ViewChild,
    ViewContainerRef,
    ViewEncapsulation
} from '@angular/core';
import { PopupService } from './popup.service';

@Component({
    selector: 'rmw-popup',
    templateUrl: './popup.component.html',
    styleUrls: ['./popup.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopupComponent implements OnInit {
    @ViewChild('popup', { static: true })
    popupElement: ElementRef;

    @ViewChild('popupContainer', { static: true })
    popupContainer: ElementRef;

    @ViewChild('popupEntry', { read: ViewContainerRef, static: true })
    popupEntry: ViewContainerRef;

    isOpened: boolean;

    constructor(private popupService: PopupService, private cdr: ChangeDetectorRef) {}

    ngOnInit() {
        this.preparePopup();
    }

    preparePopup() {
        this.popupService.popupEntry = this.popupEntry;
        this.popupService.popupContainer = this.popupContainer;
        this.popupService.popupCdr = this.cdr;
        this.popupService.isOpened$.subscribe((isOpened: boolean) => {
            if (isOpened) {
                this.showPopup();
            } else {
                this.hidePopup();
            }
        });
    }

    showPopup() {
        this.isOpened = true;
        this.cdr.detectChanges();
        setTimeout(() => {
            this.popupElement.nativeElement.style.opacity = 1;
            this.popupContainer.nativeElement.style.transform = 'scale(1)';
        });
    }

    hidePopup() {
        this.popupElement.nativeElement.style.opacity = 0;
        this.popupContainer.nativeElement.style.transform = 'scale(0.9)';
        setTimeout(() => {
            this.isOpened = false;
            this.cdr.detectChanges();
        }, 300);
    }

    @HostListener('document:keydown', ['$event'])
    onKeyUp(event: KeyboardEvent) {
        if (event.key === 'Escape' && this.isOpened) {
            event.preventDefault();
            this.closePopup();
        }
    }

    closePopup() {
        this.popupService.close();
    }
}
