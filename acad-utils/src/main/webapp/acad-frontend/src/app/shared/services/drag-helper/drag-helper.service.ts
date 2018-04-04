import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// lib for interacting with schema objects
import * as interact from 'interactjs';

export interface DragCallbackProps {
  type: InteractType;
  id: number;
  x: number;
  y: number;
}

export enum InteractType {
  box = 'box',
  buildingArea = 'buildingArea'
}

@Injectable()
export class DragHelperService {
  dragEnd$ = new BehaviorSubject<DragCallbackProps>({} as any);

  /**
   * @description
   * Created interact instance for specific type of objects
   *
   * @param selector
   *
   * @memberof DragHelperService
   */
  createInteractOptions(selector: string, type: InteractType): void {
    interact(selector)
      .draggable({
        // keep the element within the area of it's parent
        restrict: {
          restriction: 'parent',
          endOnly: true,
          elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
        },
        // enable autoScroll
        autoScroll: true,

        // call this function on every dragmove event
        onmove: this.dragMoveListener,
        // call this function on every dragend event
        onend: (e) => this.dragEndListener(e, type),
      });
  }

  /**
   * @description
   * On move listener that updates dragged object props to have view synced
   *
   * @param event drag move event
   *
   * @memberof DragHelperService
   */
  dragMoveListener(event: any): void {
    const target = event.target;
    // keep the dragged position in the data-x/data-y attributes
    const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
    const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform = 'translate(' + x + 'px, ' + y + 'px)';
    target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }

  /**
   * @description
   * Drag end listener that updates dragged DOM element
   * props in dataset and modify stylings to have view synced with data
   *
   * @param event drag event
   * @param type type of dragged object
   *
   * @memberof DragHelperService
   */
  dragEndListener(event, type): void {
    const target = event.target;
    const x = parseInt(target.style.left.slice(0, -2), 10) || 0;
    const y = parseInt(target.style.top.slice(0, -2), 10) || 0;
    const dx = (parseInt(target.getAttribute('data-x'), 10) || 0) + event.dx;
    const dy = (parseInt(target.getAttribute('data-y'), 10) || 0) + event.dy;

    // // reset transformation and set to props
    target.style.webkitTransform = 'none';
    target.style.transform = 'none';
    target.style.left = `${x + dx}px`;
    target.style.top = `${y + dy}px`;

    // reset the posiion attributes
    target.setAttribute('data-x', 0);
    target.setAttribute('data-y', 0);

    if (!target.getAttribute('data-id')) {
      throw new Error('No [attr.data-id] provided on drag element');
    }

    // pass props of dragged item
    this.dragEnd$.next({
      type,
      id: parseInt(target.getAttribute('data-id'), 10),
      x: x + dx,
      y: y + dy,
    });
  }

  /**
   * @description
   * Drag end event callback that stores coordinates, id and type of dragged object
   *
   * @returns dragged item props
   *
   * @memberof DragHelperService
   */
  onDragEnd(): BehaviorSubject<DragCallbackProps> {
    return this.dragEnd$;
  }
}
