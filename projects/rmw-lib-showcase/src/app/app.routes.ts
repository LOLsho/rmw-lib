import { Routes } from '@angular/router';
import { PopupExampleComponent } from './examples/popup-example/popup-example.component';
import { DynamicSizeExampleComponent } from './examples/dynamic-size-example/dynamic-size-example.component';
import { CssAnimationsExampleComponent } from './examples/css-animations/css-animations-example.component';
import { ScrollExampleComponent } from './examples/scroll-example/scroll-example.component';

export const routes: Routes = [
    {
        path: 'popup',
        component: PopupExampleComponent
    },
    {
        path: 'dynamic-size',
        component: DynamicSizeExampleComponent
    },
    {
        path: 'css-animations',
        component: CssAnimationsExampleComponent
    },
    {
        path: 'scroll',
        component: ScrollExampleComponent
    }
];
