import { NgModule } from '@angular/core';
import { RouterModule, ExtraOptions } from '@angular/router';

import { environment } from './../../../../environments/environment';
import { ROUTES } from './routes';

const routeConfig: ExtraOptions = {
  // enableTracing: true, // routes debugging
  useHash: false,
};

@NgModule({
  imports: [
    RouterModule.forRoot(
      ROUTES,
      routeConfig
    )
    // other imports here
  ],
  exports: [ RouterModule ]
})
export class RoutingModule { }
