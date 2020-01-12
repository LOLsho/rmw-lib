import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopupExampleComponent } from '@showcase/app/examples/popup-example/popup-example.component';
import { DynamicSizeExampleComponent } from '@showcase/app/examples/dynamic-size-example/dynamic-size-example.component';
import { CssAnimationsExampleComponent } from '@showcase/app/examples/css-animations/css-animations-example.component';
import { ScrollExampleComponent } from '@showcase/app/examples/scroll-example/scroll-example.component';


const routes: Routes = [
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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
