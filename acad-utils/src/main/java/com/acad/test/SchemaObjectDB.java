package com.acad.test;

import com.acad.entities.SchemaObject;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

public class SchemaObjectDB<T extends SchemaObject> {
    private int index = 0;
    private List<T> objects = new ArrayList<>();

    public SchemaObjectDB(List<T> initialObjects) {
        objects.addAll(initialObjects);
        index = initialObjects.size() + 1;
    }

    public void saveObject(T object) {
        objects.add(object);
    }

    public void saveObject(Collection<T> object) {
        objects.addAll(object);
    }

    public List<T> getAllEntitiesBySchemaId(int schemaId) {
        return objects.stream().filter(e -> e.getSchemaId() == schemaId).collect(Collectors.toList());
    }

    public synchronized void updateOrSaveEntity(T object) {
        if (object.getId() == 0) {
            object.setId(index++);
            objects.add(object);
        }
        objects.stream()
                .filter(e -> Objects.equals(e.getSchemaId(), object.getSchemaId()) &&
                        Objects.equals(e.getId(), object.getId())).findFirst()
                .ifPresent(e -> {
                    objects.remove(e);
                    objects.add(object);
                });
    }

    /**
     * Returns Entity found in list of objects, by passed-in {@code id},
     * if there is no entity with such id - return 'null'.
     */
    public T getEntityById(int id) {
        return objects.stream().filter(e -> e.getId() == id).findFirst().orElse(null);
    }
}
