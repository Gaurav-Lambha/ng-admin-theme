import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, FooterComponent, LeftSidebarComponent],
  exports: [HeaderComponent, FooterComponent, LeftSidebarComponent],
})
export class LayoutsModule { }
