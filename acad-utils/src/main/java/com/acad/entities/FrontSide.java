package com.acad.entities;

import com.acad.utils.IIndexable;

/**
 * Type of front side. Depends on it, {@link Box} object will have additional drawn rectangle,
 * which will represent open side of it. Examples:
 * 1) TOP side
 *  ________
 * |--------|
 * |        |
 * |        |
 *  ---------
 * 2) BOTTOM side
 *  ---------
 * |        |
 * |        |
 * |________|
 * |--------|
 *
 * 3) LEFT side
 * |--------|
 * ||       |
 * ||       |
 * ||       |
 * |--------|
 *
 * 4) RIGHT side
 * |--------|
 * |       ||
 * |       ||
 * |       ||
 * |--------|
 */
public enum FrontSide implements IIndexable<Integer> {

    RIGHT(1, "RIGHT", true),
    BOTTOM(2, "BOTTOM", false),
    LEFT(3, "LEFT", true),
    TOP(4, "TOP", false);

    private final int id;
    private final String message;
    /**
     * Has not influence on UI representation.
     */
    private final boolean straight;

    FrontSide(int id, String message, boolean straight) {
        this.id = id;
        this.message = message;
        this.straight = straight;
    }

    @Override
    public final Integer getIndexKey() {
        return id;
    }

    public final String getMessageKey() {
        return message;
    }
}
