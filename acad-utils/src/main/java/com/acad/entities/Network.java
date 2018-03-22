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
 * Object, which represent network, which contains {@link StepPoint}s linked by
 * {@link ConnectedLine}s between each other.
 */
@Getter
@Setter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
// @Entity
public class Network extends SchemaObject {
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
    private String name;

    /**
     * {@link Walker} type configured for current network object. Just modification and view at UI side panel.
     */
    private Integer walkerId;
}
