import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ResizeSensor } from 'css-element-queries';

@Component({
    selector: 'rmw-dynamic-size',
    templateUrl: './dynamic-size.component.html',
    styleUrls: ['./dynamic-size.component.scss']
})
export class DynamicSizeComponent implements OnInit, AfterViewInit, OnDestroy {
    @Input()
    display = 'inline-flex';

    @ViewChild('wrap', { static: true })
    wrap: ElementRef;

    sensor: ResizeSensor;

    constructor(private elemRef: ElementRef) {}

    ngOnInit() {
        this.prepareComponent();
    }

    prepareComponent() {
        this.elem.style.transition = 'height 0.3s ease, width 0.3s ease';
        this.elem.style.overflow = `hidden`;
        this.elem.style.height = `${this.wrap.nativeElement.offsetHeight}px`;
        this.elem.style.width = `${this.wrap.nativeElement.offsetWidth}px`;
        setTimeout(() => {
            this.elem.style.height = `${this.wrap.nativeElement.offsetHeight}px`;
            this.elem.style.width = `${this.wrap.nativeElement.offsetWidth}px`;
        }, 50);
    }

    ngAfterViewInit() {
        this.sensor = new ResizeSensor(this.wrap.nativeElement, ({ width, height }) => {
            this.elem.style.height = `${height}px`;
            this.elem.style.width = `${width}px`;
        });
    }

    get elem() {
        return this.elemRef.nativeElement;
    }

    ngOnDestroy() {
        this.sensor.detach();
    }
}
