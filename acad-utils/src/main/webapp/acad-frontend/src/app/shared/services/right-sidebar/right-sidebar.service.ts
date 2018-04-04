import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// Models
import { BuildingArea } from './../../../models/building-area/building-area.model';
import { Box } from './../../../models/box/box.model';
import { Schema } from './../../../models/schema.model';
import { SidebarProps, SidebarPropType } from './../../../models/right-sidebar/right-sidebar-props.model';

@Injectable()
export class RightSidebarService {
  props: BehaviorSubject<SidebarProps> = new BehaviorSubject({ type: SidebarPropType.none, value: null });

  /**
   * @description
   * Pass next props for right sidebar for handling sidebar form
   *
   * @param props type of model and model item that will be parsed by right sidebar
   *
   * @memberof RightSidebarService
   */
  nextProps(props: SidebarProps): void {
    this.props.next(props);
  }

  /**
   * @description
   * Returns subject with currenty active props that displayed on right sidebar
   *
   * @memberof RightSidebarService
   */
  getProps(): BehaviorSubject<SidebarProps> {
    return this.props;
  }
}
