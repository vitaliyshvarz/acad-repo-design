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
 * Object, which represent directed or not line, with start and end {@link StepPoint}.
 */
@Getter
@Setter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
// @Entity
public class ConnectedLine extends SchemaObject {
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
    private Integer load;

    /**
     * Start step point id.
     */
    private int startStepPointId;

    /**
     * End step point id.
     */
    private int endStepPointId;

    /**
     * Network id to which current line is related.
     */
    private int networkId;

    /**
     * Define type of line, if 'true' - line is '- - - - ' type, otherwise simple '-------'.
     */
    private boolean isDotted;

    /**
     * Artificial value, has no influence on object UI representation.
     */
    private float distance;

    /**
     * Color of object.
     */
    private String bodyColor;

    /**
     * Width of line for representation.
     */
    private int lineWidth;

    /**
     * Define type of end points in line, if 'true' - simple line,
     * if 'false' - arrow type ('--->') line from start to end point.
     */
    private boolean skipDirection;

    private transient StepPoint startPoint;
    private transient StepPoint endPoint;
}
