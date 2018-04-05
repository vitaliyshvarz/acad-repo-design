import { BuildingAreaFormComponent } from './schemas-page/right-sidebar/building-area-form/building-area-form.component';
import { BoxFormComponent } from './schemas-page/right-sidebar/box-form/box-form.component';
import { SchemaRightSidebarComponent } from './schemas-page/right-sidebar/right-sidebar.component';
import { BuildingAreasViewComponent } from './schemas-page/building-areas-view/building-areas-view.component';
import { BoxesViewComponent } from './schemas-page/boxes-view/boxes-view.component';
import { BuildingAreaComponent } from './schemas-page/building-areas-view/building-area/building-area.component';
import { BoxComponent } from './schemas-page/boxes-view/box/box.component';
import { SchemaViewComponent } from './schemas-page/schema-view/schema-view.component';
import { HomeComponent } from './home/home.component';
import { NoContentComponent } from './no-content/no-content.component';
import { SchemasPageComponent } from './schemas-page/schemas-page.component';
import { SchemaFormComponent } from './schemas-page/right-sidebar/schema-form/schema-form.component';

const FORMS = [
  SchemaFormComponent,
  BoxFormComponent,
  BuildingAreaFormComponent
];

export const COMPONENTS = [
  ...FORMS,
  SchemasPageComponent,
  SchemaViewComponent,
  SchemaRightSidebarComponent,
  BoxComponent,
  BoxesViewComponent,
  BuildingAreaComponent,
  BuildingAreasViewComponent,
  HomeComponent,
  NoContentComponent
];
