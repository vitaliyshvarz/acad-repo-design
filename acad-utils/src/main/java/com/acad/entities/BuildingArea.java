package com.acad.entities;

import com.acad.utils.IIndexable;
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
 * Area - rectangle that represents limited space for placement of other objects.
 */
@Getter
@Setter
@Builder
@ToString
@NoArgsConstructor
@AllArgsConstructor
// @Entity
public class BuildingArea extends SchemaObject {
    /**
     * Used to link object to schema, hidden property on UI.
     */
    private Integer schemaId;

    /**
     * Used to link objects, unmodifiable and only visible (non-editable) on UI.
     */
    private Integer id;

    /**
     * Just modification and view at UI side panel.
     */
    @Nullable
    private String name;

    /**
     * Just modification and view at UI side panel.
     */
    @Nullable
    private String description;

    /**
     * Start point at left-top corner of area-rectangle by OX.
     */
    private float posX;

    /**
     * Start point at left-top corner of area-rectangle by OY.
     */
    private float posY;

    /**
     * Size X of area-rectangle.
     */
    private float sizeX;

    /**
     * Size Y of area-rectangle.
     */
    private float sizeY;

    /**
     * Just modification and view at UI side panel, as UI is 2D, general top view.
     */
    private float sizeZ;

    /**
     * Color of object body.
     */
    private String bodyColor;

    /**
     * Color of object borders.
     */
    private String borderColor;

    /**
     * Define if object is filled with color fully or not, 'true' - fully,
     * 'false' - make transparency 90 %.
     */
    private boolean solid;

    /**
     * Just modification and view at UI side panel.
     */
    @Nullable
    private AreaType type;

    /**
     * Just modification and view at UI side panel.
     */
    private String mark;

    public enum AreaType implements IIndexable<Byte> {

        @SuppressWarnings("unused")
        NONE(0, "None"),

        @SuppressWarnings("unused")
        UNIQUE(1, "Unique"),

        @SuppressWarnings("unused")
        DECORE(2, "Decor"),

        @SuppressWarnings("unused")
        FORBIDDEN(3, "Forbidden");

        @Override
        public final Byte getIndexKey() {
            return id;
        }

        public final String getMessage() {
            return message;
        }

        private final Byte id;
        private final String message;

        AreaType(int id, String message) {
            this.id = (byte) id;
            this.message = message;
        }
    }
}
