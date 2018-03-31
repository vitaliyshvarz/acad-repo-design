
export enum SidebarPropType {
  schema,
  box,
  buildingArea,
  none = ''
}

export interface SidebarProps {
  type: SidebarPropType;
  value: any;
}
