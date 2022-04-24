import { Component, OnInit, Output } from '@angular/core';
import { page } from 'src/app/app.component';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() navEvent = new EventEmitter<page>();
  constructor() {}

  ngOnInit(): void {}

  Nav(route: page): void {
    this.navEvent.emit(route);
  };
}
