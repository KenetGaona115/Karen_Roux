import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Output() sectionEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  sendSections(section: any): void {
    this.sectionEvent.emit(section);
  }
}
