import { Component, ViewEncapsulation } from '@angular/core';

export type page = 'Report' | 'Vision' | 'Team';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  contentSelection: page = 'Vision';

  nav($event: page) {
    this.contentSelection = $event;
  }
}
