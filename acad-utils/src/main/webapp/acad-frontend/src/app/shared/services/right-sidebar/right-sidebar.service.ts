import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// Models
import { BuildingArea } from './../../../models/building-area/building-area.model';
import { Box } from './../../../models/box/box.model';
import { Schema } from './../../../models/schema.model';
import { SidebarProps, SidebarPropType } from './../../../models/right-sidebar/right-sidebar-props.model';

@Injectable()
export class RightSidebarService {
  props: BehaviorSubject<SidebarProps> = new BehaviorSubject({ type: SidebarPropType.none, value: {} });

  nextProps(props: SidebarProps): void {
    this.props.next(props);
  }

  getProps(): BehaviorSubject<SidebarProps> {
    return this.props;
  }
}
