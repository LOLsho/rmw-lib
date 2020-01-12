import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopupExampleComponent } from './examples/popup-example/popup-example.component';
import { Test1PopupComponent } from './examples/popup-example/popup-test-components/test1.popup.component';
import { Test2PopupComponent } from './examples/popup-example/popup-test-components/test2.popup.component';
import { DynamicSizeExampleComponent } from './examples/dynamic-size-example/dynamic-size-example.component';
import { ScrollExampleComponent } from './examples/scroll-example/scroll-example.component';
import { CssAnimationsExampleComponent } from './examples/css-animations/css-animations-example.component';
import { AnimationMenuComponent } from './examples/css-animations/menu/animation-menu.component';
import { RmwLibModule } from '@lib/rmw-lib.module';


@NgModule({
	declarations: [
		AppComponent,
		
		PopupExampleComponent,
		Test1PopupComponent,
		Test2PopupComponent,
		
		DynamicSizeExampleComponent,
		ScrollExampleComponent,
		
		CssAnimationsExampleComponent,
		AnimationMenuComponent,
	],
	entryComponents: [
		PopupExampleComponent,
		Test1PopupComponent,
		Test2PopupComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		RmwLibModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
