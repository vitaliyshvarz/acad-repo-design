import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

// Models
import { Schema } from './../../../models/schema.model';
import { Box } from './../../../models/box/box.model';
import { BoxBase } from './../../../models/box/box-base.model';
import { BuildingArea } from './../../../models/building-area/building-area.model';
import { SidebarPropType, SidebarProps } from './../../../models/right-sidebar/right-sidebar-props.model';

// Services
import { RightSidebarService } from './../../../shared/services/right-sidebar/right-sidebar.service';

@Component({
  selector: 'app-schema-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss']
})
export class SchemaRightSidebarComponent implements OnInit, OnDestroy {
  currentProps: SidebarProps;
  propTypes = SidebarPropType;

  subscription: Subscription;

  constructor(private readonly sidebarService: RightSidebarService) { }

  ngOnInit() {
    // subscribe for props change to stay up to date with clicked object from schema view
    this.subscription = this.sidebarService
      .getProps()
      .subscribe((props) => this.currentProps = props);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
