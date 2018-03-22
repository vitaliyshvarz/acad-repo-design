/**
 * @description
 * Basic box model that will be extended with other interface
 */
export interface BoxBase {
  schemaId: number;
  id: number;
  text?: string;
  posX: number;
  posY: number;
  posZ: number;
  sizeX: number;
  sizeY: number;
  sizeZ: number;
  bodyColor?: string;
  borderColor?: string;
  solid: boolean; // if false - transparency=90%;
}
