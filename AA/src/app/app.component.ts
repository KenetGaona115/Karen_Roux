import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AA';
  show: boolean = false;
  ngOnInit() {
    setTimeout(() => {
      this.show = true;
    }, 3000);
  }
}
