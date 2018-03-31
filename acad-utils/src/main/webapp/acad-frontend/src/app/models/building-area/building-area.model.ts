export interface BuildingArea {
  schemaId: number;
  id: number;
  bodyColor: string;
  borderColor: string;
  description: string;
  mark: string;
  name: string;
  posX: number;
  posY: number;
  sizeX: number;
  sizeY: number;
  sizeZ: number;
  solid: boolean;
  type: string | null;
}
