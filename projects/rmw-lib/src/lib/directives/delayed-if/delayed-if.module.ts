import { NgModule } from '@angular/core';
import { DelayedIfDirective } from './delayed-if.directive';

@NgModule({
	declarations: [DelayedIfDirective],
	exports: [DelayedIfDirective],
})
export class DelayedIfModule {}
