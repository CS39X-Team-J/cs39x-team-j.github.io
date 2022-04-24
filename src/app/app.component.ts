import { Component, ViewEncapsulation } from '@angular/core';

export type page = 'Report' | 'About' | 'Team';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  contentMap = {
    Report: 'report.html',
    About: 'about.html',
    Team: 'team.html',
  };

  contentSelection: page = 'About';

  nav($event: page) {
    this.contentSelection = $event;
  }
}
