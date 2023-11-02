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
        label: 'Productos',
        icon: 'pi pi-fw pi-tags',
        items: [
          {
            label: 'Todos los Productos',
            icon: 'pi pi-fw pi-list',
            routerLink: ['/products']
          },
          {
            label: 'Añadir Producto',
            icon: 'pi pi-fw pi-plus',
            routerLink: ['/add-product']
          }
        ]
      },
      {
        label: 'Acerca de nosotros',
        icon: 'pi pi-building',
        routerLink: ['/about-us']
      },
      // Puedes añadir más elementos de menú según tu estructura
    ];
  }
}