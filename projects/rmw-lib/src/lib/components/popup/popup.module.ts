import { NgModule } from '@angular/core';
import { PopupComponent } from './popup.component';
import { PopupService } from './popup.service';

@NgModule({
    declarations: [PopupComponent],
    exports: [PopupComponent],
    imports: [],
    providers: [PopupService],
})
export class PopupModule {}
