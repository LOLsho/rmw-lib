import { Component } from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {
    constructor() {}
    
    exampleLinks = [
        { name: 'Popup', link: 'popup' },
        { name: 'Dynamic Size', link: 'dynamic-size' },
        { name: 'CSS Animations', link: 'css-animations' },
        { name: 'Scroll', link: 'scroll' }
    ].sort((a, b) => a.name.localeCompare(b.name));
}
