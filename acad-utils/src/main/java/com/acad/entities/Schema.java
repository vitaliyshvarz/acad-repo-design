package com.acad.entities;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import lombok.experimental.Accessors;

import javax.persistence.Entity;

/**
 * Schema object for drawing with all objects placed on it.
 * Always start from O(x;y) -> (0;0) point, define properties of grid.
 */
@Getter
@Setter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
// @Entity
public class Schema {
    /**
     * Used to link objects, unmodifiable and only visible (non-editable) on UI.
     */
    private Integer id;

    /**
     * Just modification and view at UI side panel.
     */
    private String name;

    /**
     * Size X of schema.
     */
    private float sizeX;

    /**
     * Size Y of schema.
     */
    private float sizeY;

    /**
     * Size Z of schema.
     */
    private float sizeZ;

    /**
     * Grid step by OX.
     */
    private float gridStepX;

    /**
     * Grid step by OY.
     */
    private float gridStepY;

    /**
     * Disable deleting of any object at schema if 'true', otherwise objects are deletable.
     */
    private boolean disableDeleting;
}
