import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Error401Component } from './error-401/error-401.component';
import { Error404Component } from './error-404/error-404.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [Error404Component, Error401Component],
  exports: [Error404Component, Error401Component]
})
export class ErrorPagesModule { }
