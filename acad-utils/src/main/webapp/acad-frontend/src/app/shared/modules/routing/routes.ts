import { Route } from '@angular/router';

// Components
import { AppComponent } from './../../../app.component';
import { HomeComponent } from './../../../components/home/home.component';
import { SchemaViewComponent } from './../../../components/schemas-page/schema-view/schema-view.component';
import { SchemasPageComponent } from './../../../components/schemas-page/schemas-page.component';
import { NoContentComponent } from './../../../components/no-content/no-content.component';

// Services
import { SchemaResolver } from './../../services/resolvers/schema-resolve/schema-resolve.service';

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
    path: 'schema',
    component: SchemasPageComponent,
  },
  {
    path: 'schema/:id',
    component: SchemaViewComponent,
    resolve: {
      schema: SchemaResolver
    }
  },
  {
    path: '**', // wildcard routes
    component: NoContentComponent
  }
];
