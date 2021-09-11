import { LayoutsModule } from './../shared/components/layout-pages/layouts.module';
import { CoreRoutes } from './core.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreComponent } from './core.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LayoutsModule,
    CoreRoutes
  ],
  declarations: [CoreComponent]
})
export class CoreModule { }
