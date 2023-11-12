import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private element: ElementRef) { }

  ngOnInit() {
  }

  navigateToSection(section: any): void {
    console.log(section);
    const element = this.element.nativeElement.querySelector(`#${section}`);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
