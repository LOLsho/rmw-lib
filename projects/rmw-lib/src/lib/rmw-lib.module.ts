import { ModuleWithProviders, NgModule } from '@angular/core';
import { LIB_CONFIG, RmwLibConfig } from './model/rmw-lib-config';
import { PopupModule } from '@lib/components/popup/popup.module';
import { DynamicSizeModule } from '@lib/components/dynamic-size/dynamic-size.module';
import { InitialFocusModule } from '@lib/directives/initial-focus/initial-focus.module';
import { DelayedIfModule } from '@lib/directives/delayed-if/delayed-if.module';


const componentModules = [
    DynamicSizeModule,
    PopupModule,
];

const directiveModules = [
    InitialFocusModule,
    DelayedIfModule,
];


@NgModule({
    imports: [
        ...componentModules,
        ...directiveModules,
    ],
    declarations: [

    ],
    exports: [
        ...componentModules,
        ...directiveModules,
    ],
    providers: [
    
    ],
})
export class RmwLibModule {
    static forRoot(config: RmwLibConfig): ModuleWithProviders {
        return {
            ngModule: RmwLibModule,
            providers: [
                {
                    provide: LIB_CONFIG,
                    useValue: config,
                },
            ],
        };
    }
}
