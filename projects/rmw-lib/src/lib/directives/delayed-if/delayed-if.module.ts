import { NgModule } from '@angular/core';
import { DelayedIfDirective } from '@lib/directives/delayed-if/delayed-if.directive';

@NgModule({
	declarations: [DelayedIfDirective],
	exports: [DelayedIfDirective],
})
export class DelayedIfModule {}
