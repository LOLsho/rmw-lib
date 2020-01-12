import {
    ChangeDetectorRef,
    ComponentFactoryResolver,
    ComponentRef,
    ElementRef,
    Injectable,
    ViewContainerRef
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PopupConfig } from './popup.models';

@Injectable()
export class PopupService {
    
    popupCdr: ChangeDetectorRef;
    popupEntry: ViewContainerRef;
    popupContainer: ElementRef;
    isOpened$ = new BehaviorSubject(false);
    isInTransitionProcess: boolean;
    currentlyOpenedComponent: any;

    constructor(private resolver: ComponentFactoryResolver) {}

    open(component: any, config?: PopupConfig) {
        if (this.currentlyOpenedComponent === component) {
            return;
        }
        document.body.className = 'freeze';

        if (this.isOpened) {
            this.closeCurrentAndOpenAnother(component, config);
        } else {
            this.createAndPreparePopupComponent(component, config);
            this.isOpened$.next(true);
        }
    }

    closeCurrentAndOpenAnother(component: any, config: PopupConfig) {
        this.isInTransitionProcess = true;
        this.popupContainer.nativeElement.style.opacity = 0;
        this.popupContainer.nativeElement.style.transform = 'scale(0.9)';

        setTimeout(() => {
            this.clearComponent();
            this.createAndPreparePopupComponent(component, config);
            this.popupContainer.nativeElement.style.opacity = 1;
            this.popupContainer.nativeElement.style.transform = 'scale(1)';
            this.isInTransitionProcess = false;
            this.popupCdr.detectChanges();
        }, 300);
    }

    createAndPreparePopupComponent(component: any, config: PopupConfig) {
        this.currentlyOpenedComponent = component;
        const componentRef: ComponentRef<any> = this.createComponent(component);

        if (config && config.inputs) {
            Object.keys(config.inputs).forEach((key: string) => {
                componentRef.instance[key] = config.inputs[key];
            });
        }

        componentRef.instance.closePopup = this.close.bind(this);
    }

    createComponent(component): ComponentRef<any> {
        const factory = this.resolver.resolveComponentFactory(component);
        return this.popupEntry.createComponent(factory);
    }

    clearComponent() {
        this.currentlyOpenedComponent = null;
        this.popupEntry.clear();
    }

    close() {
        if (this.isInTransitionProcess) {
            return;
        }
        this.isOpened$.next(false);
        setTimeout(() => this.clearComponent(), 300);
        document.body.className = '';
    }

    get isOpened(): boolean {
        return this.isOpened$.value;
    }
}
