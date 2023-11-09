import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { NavbarComponent } from './navbar/navbar.component';
import { MenubarModule } from 'primeng/menubar';
import { WelcomeComponent } from './welcome/welcome.component';
import { SidebarModule } from 'primeng/sidebar';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    MenubarModule,
    SidebarModule
  ],
  declarations: [
    NavbarComponent,
    WelcomeComponent,
    FooterComponent
  ],
  exports: [
    NavbarComponent,
    WelcomeComponent,
    FooterComponent
  ]
})
export class ComponentModule { }
