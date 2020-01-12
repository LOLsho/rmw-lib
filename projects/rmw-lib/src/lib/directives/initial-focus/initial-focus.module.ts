import { NgModule } from '@angular/core';
import { InitialFocusDirective } from './initial-focus.directive';

@NgModule({
	declarations: [InitialFocusDirective],
	exports: [InitialFocusDirective],
})
export class InitialFocusModule {}
