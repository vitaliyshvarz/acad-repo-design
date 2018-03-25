import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  routes = [
    { label: 'Home', path: '/home' },
    { label: 'Schema view', path: '/schema/1' },
  ];
}
