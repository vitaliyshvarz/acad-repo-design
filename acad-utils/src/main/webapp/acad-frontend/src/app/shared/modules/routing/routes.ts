import { Route } from '@angular/router';

import { AppComponent } from './../../../app.component';
import { HomeComponent } from './../../../components/home/home.component';
import { SchemaComponent } from './../../../components/schema/schema.component';
import { NoContentComponent } from './../../../components/no-content/no-content.component';

export const ROUTES: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'schema/:id',
    component: SchemaComponent
  },
  {
    path: '**', // wildcard routes
    component: NoContentComponent
  }
];
