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
import java.awt.geom.Point2D;

/**
 * Object, which represents point, related to {@link Network}, which usually is part of
 * {@link ConnectedLine}.
 */
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
// @Entity
public class StepPoint extends SchemaObject {
    /**
     * Used to link object to schema, hidden property on UI.
     */
    private Integer schemaId;

    /**
     * Used to link objects, unmodifiable and only visible (non-editable) on UI.
     */
    private Integer id;

    /**
     * Id of {@link Network} to which current point is related, editable via side panel on UI.
     */
    private int networkId;

    /**
     * Define behavior of box placement, if 'true' - box can be placed and replaced only in scope of
     * area, if {@link BuildingArea} is replaced, current box is replaced with it,
     * editable via side panel on UI.
     */
    private boolean keepArea;

    /**
     * Id of {@link BuildingArea} to which current box is related, editable via side panel on UI.
     */
    private int buildingAreaId;

    /**
     * Just modification and view at UI side panel.
     */
    private String name;

    /**
     * Position of point defined by OX.
     */
    private float posX;

    /**
     * Position of point defined by OY.
     */
    private float posY;

    /**
     * Color of object body.
     */
    private String bodyColor;

    /**
     * Color of object borders.
     */
    private String borderColor;

    /**
     * Depends on type of step point, it should be represented as:
     * 1) start -> white triangle, with black borders.
     * 2) common -> just regular white circle, with black borders.
     * 3) stop -> regular white circle with black X mark in the middle.
     * 4) end -> white square with black borders.
     */
    private StepType type;

    private transient Point2D point;

    public enum StepType implements IIndexable<Integer> {
        START_STEP(0, "Start step"),
        COMMON_STEP(1, "Common step"),
        STOP_STEP(10, "Stop step"),
        FINISH_STEP(100, "Finish step");

        private final int id;
        private final String message;

        StepType(int id, String message) {
            this.id = id;
            this.message = message;
        }

        @Override
        public final Integer getIndexKey() {
            return id;
        }

        public final String getMessageKey() {
            return message;
        }
    }
}
