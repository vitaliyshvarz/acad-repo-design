import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// Models
import { BuildingArea } from './../../../models/building-area/building-area.model';

// Services
import { HttpService } from './../http/http.service';

@Injectable()
export class BuildingAreasService {
  public buildingAreas: BehaviorSubject<BuildingArea[]> = new BehaviorSubject([]);

  constructor(private readonly httpService: HttpService) { }

  getBuildingArea(schemaId: number, areaId: number): Observable<BuildingArea> {
    return this.httpService.get(`getBuildingArea/${schemaId}/${areaId}`);
  }

  saveBuildingArea(areaId: number, buildingArea): Observable<BuildingArea> {
    return this.httpService.post(`saveBuildingArea/${areaId}`, buildingArea);
  }
}
