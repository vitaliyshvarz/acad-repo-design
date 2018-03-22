import { SchemasService } from './services/schemas/schemas.service';
import { HttpService } from './services/http/http.service';

export const SHARED_SERVICES = [
  HttpService,
  SchemasService,
];

export const SHARED_COMPONENTS = [];
