// Platform imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Custom modules
import { MaterialModule } from './shared/modules/material/material.module';
import { RoutingModule } from './shared/modules/routing/router.module';

// Custom Components and Services imports
import { AppComponent } from './app.component';
import { COMPONENTS } from './components/index';
import { SHARED_SERVICES, SHARED_COMPONENTS } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    ...COMPONENTS,
    ...SHARED_COMPONENTS
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RoutingModule,
    MaterialModule,
  ],
  providers: [
    ...SHARED_SERVICES,
    HttpClient
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
