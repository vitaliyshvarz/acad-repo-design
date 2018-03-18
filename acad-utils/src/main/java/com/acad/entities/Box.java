package com.acad.entities;

import com.sun.istack.internal.Nullable;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import lombok.experimental.Accessors;

import javax.persistence.Entity;

/**
 * Box - rectangle that represents container of {@link InsideBox}es, usually
 * placed in scope of {@link BuildingArea}.
 */
@ToString
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
// @Entity
public class Box extends SchemaObject {
    /**
     * Used to link object to schema, hidden property on UI.
     */
    private Integer schemaId;

    /**
     * Used to link objects, unmodifiable and only visible (non-editable) on UI.
     */
    private Integer id;

    /**
     * Depends on its value rectangle has additional border without color filling,
     * editable via side panel on UI.
     * Examples of look in pseudo graphic available at {@link FrontSide}.
     */
    private FrontSide frontSide;

    /**
     * Id of {@link BuildingArea} to which current box is related, editable via side panel on UI.
     */
    private int buildingAreaId;

    /**
     * Id of {@link StepPoint} from which current box is accessible, editable via side panel on UI.
     */
    private int accessPointId;

    /**
     * Define behavior of box placement, if 'true' - box can be placed and replaced only in scope of
     * area, if {@link BuildingArea} is replaced, current box is replaced with it,
     * editable via side panel on UI.
     */
    private boolean keepArea;

    /**
     * Just modification and view at UI side panel.
     */
    @Nullable
    private String text;

    /**
     * Start point at left-top corner of box-rectangle by OX.
     */
    private float posX;

    /**
     * Start point at left-top corner of box-rectangle by OY.
     */
    private float posY;

    /**
     * Just modification and view at UI side panel.
     */
    private float posZ;

    /**
     * Size X of box-rectangle.
     */
    private float sizeX;

    /**
     * Size Y of box-rectangle.
     */
    private float sizeY;

    /**
     * Just modification and view at UI side panel.
     */
    private float sizeZ;

    /**
     * Count of {@link InsideBox}es placed in one row.
     */
    private int rows;

    /**
     * Count of {@link InsideBox}es placed in one column.
     */
    private int cols;

    /**
     * Color of object body.
     */
    @Nullable
    private String bodyColor;

    /**
     * Color of object borders.
     */
    @Nullable
    private String borderColor;

    /**
     * Define if object is filled with color fully or not, 'true' - fully,
     * 'false' - make transparency 90 %.
     */
    private boolean solid;

    /**
     * Define if inside boxes exist or not. If 'true' - available, 'false' - not.
     */
    private boolean noBins;
}