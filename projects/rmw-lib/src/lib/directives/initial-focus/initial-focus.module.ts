import { NgModule } from '@angular/core';
import { InitialFocusDirective } from '@lib/directives/initial-focus/initial-focus.directive';

@NgModule({
	declarations: [InitialFocusDirective],
	exports: [InitialFocusDirective],
})
export class InitialFocusModule {}
