import { BoxBase } from './box-base.model';

export interface InsideBox extends BoxBase {
    parentBoxId: string;
    boxTypeId: string;
    isTypeChangeable: string; // can boxTypeId be changed?
    /**
     * Define count of rectangles, that should be drawn in scope of inside box.
     * Each rectangle should be light grey color with text 'p{x}', where {x} - changeable in range
     * [1, numberOfPackets].
     */
    numberOfPackets: string;
}
