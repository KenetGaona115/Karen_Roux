import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  items: any[];

  constructor() {
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-fw pi-home',
        routerLink: ['/home']
      },
      {
        label: 'Galeria',
        icon: 'pi pi-images',
        routerLink: ['/gallery']
      },
      {
        label: 'Nosotros',
        icon: 'pi pi-building',
        routerLink: ['/about-us']
      },
      // Puedes añadir más elementos de menú según tu estructura
    ];
  }
}