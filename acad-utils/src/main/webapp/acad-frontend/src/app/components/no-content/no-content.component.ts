import { Component } from '@angular/core';

@Component({
  selector: 'app-no-content-component',
  template: `
    <div class="centered no-content">
      <h1>ERROR 404</h1>
      <h2>Whoops! Looks like this page does not exist anymore</h2>
      <a routerLink="/" mat-raised-button color="primary">Back to Application</a>
    </div>
  `,
})
export class NoContentComponent { }
