package com.acad.entities;

import lombok.Getter;
import lombok.Setter;

/**
 * Object exists for drawing on schema.
 */
@Getter
@Setter
public abstract class SchemaObject {
    /**
     * Used to link object to schema, hidden property on UI.
     */
    public abstract Integer getSchemaId();

    /**
     * Used to link objects, unmodifiable and only visible (non-editable) on UI.
     */
    public abstract Integer getId();

    public abstract void setSchemaId(Integer schemaId);

    public abstract void setId(Integer id);
}
