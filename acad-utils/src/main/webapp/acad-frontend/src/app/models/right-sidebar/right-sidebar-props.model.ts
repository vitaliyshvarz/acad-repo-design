import { BuildingArea } from './../building-area/building-area.model';
import { Box } from './../box/box.model';
import { Schema } from './../schema.model';

export enum SidebarPropType {
  none,
  schema,
  box,
  buildingArea,
}

export interface SidebarProps {
  type: SidebarPropType;
  value: Schema | Box | BuildingArea;
}
