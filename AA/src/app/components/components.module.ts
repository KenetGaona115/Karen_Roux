import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { NavbarComponent } from './navbar/navbar.component';
import { MenubarModule } from 'primeng/menubar';
import { WelcomeComponent } from './welcome/welcome.component';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    MenubarModule,
    SidebarModule
  ],
  declarations: [
    NavbarComponent,
    WelcomeComponent
  ],
  exports: [
    NavbarComponent,
    WelcomeComponent
  ]
})
export class ComponentModule { }
