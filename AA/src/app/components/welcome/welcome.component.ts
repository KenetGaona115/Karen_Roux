import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  sidebarVisible: boolean = true;
  close: boolean = false;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.close = true;
      this.sidebarVisible = false;
    }, 2000);
  }

}
