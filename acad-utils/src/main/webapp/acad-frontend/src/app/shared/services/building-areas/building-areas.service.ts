import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// Models
import { BuildingArea } from './../../../models/building-area/building-area.model';

// Services
import { HttpService } from './../http/http.service';

@Injectable()
export class BuildingAreasService {
  buildingAreas: BehaviorSubject<BuildingArea[]> = new BehaviorSubject([]);

  constructor(private readonly httpService: HttpService) { }

  /**
   * @description
   * Performs a GET request for building area item related to specific schema
   *
   * @param schemaId id of related schema
   * @param areaId id of area that will be returned
   * @returns Observable with building area item
   *
   * @memberof BuildingAreasService
   */
  getBuildingArea(schemaId: number, areaId: number): Observable<BuildingArea> {
    return this.httpService.get(`getBuildingArea/${schemaId}/${areaId}`);
  }

  /**
   * @description
   * Perfors a POST request that updates building area
   *
   * @param areaId id of area that will be saved
   * @param buildingArea building area that will be saved
   *
   * @returns Observable with updated building area data
   *
   * @memberof BuildingAreasService
   */
  saveBuildingArea(areaId: number, buildingArea: BuildingArea): Observable<BuildingArea> {
    return this.httpService.post(`saveBuildingArea/${areaId}`, buildingArea);
  }
}
