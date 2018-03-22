import { BoxBase } from './box-base.model';

export interface Box extends BoxBase {
  buildingAreaId: number;
  /**
   * Id of {@link StepPoint} from which current box is accessible, editable via side panel on UI.
   */
  accessPointId: number;
  keepArea: boolean; // should we stay inside other figure?
  cols: number; // Count of InsideBoxes placed in one column
  noBins: boolean; // inside boxes exist?
  frontSide: any; // isn't known yet
}
