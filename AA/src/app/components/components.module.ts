import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { NavbarComponent } from './navbar/navbar.component';
import { MenubarModule } from 'primeng/menubar';
@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    MenubarModule
  ],
  declarations: [
    NavbarComponent,
  ],
  exports: [
    NavbarComponent
  ]
})
export class ComponentModule { }
