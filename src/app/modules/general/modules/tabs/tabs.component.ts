/**
 * The main component that renders single TabComponent
 * instances.
 */

import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';

import { TabComponent } from './tab.component';
import { observable } from 'mobx';
import EventsService from '../services/pubsub/events.service';
import { Refresher } from '../services/pubsub/Refresher';
// import { DynamicTabsDirective } from './dynamic-tabs.directive';

@Component( {
  selector: 'app-my-tabs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tabs.component.html',
  styleUrls: [ './tabs.component.scss' ],
} )
export class TabsComponent implements AfterContentInit {

  @ContentChildren( TabComponent ) tabs: QueryList<TabComponent>;

   @observable xxx = ''


  @Input() set refresh( value ) {
    this.xxx = value;
  }

  get refresh(): string {
    return this.xxx;
  }

  refresher: Refresher = null;

   constructor() {
    this.refresher = EventsService.refresher;

      EventsService.subscribe('tabscountchanged', null, () => {
          this.xxx = new Date().getTime().toString();
      });     

     
   }
  // contentChildren are set
  ngAfterContentInit () {
    this.tabs.changes.subscribe(v => {
      // 
      this.xxx = new Date().getTime().toString();
    });

    // get all active tabs
    let activeTabs = this.tabs.filter( ( tab ) => tab.active );

    // if there is no active tab set, activate the first
    if ( activeTabs.length === 0 ) {
      this.selectTab( this.tabs.first );
    }
  }

  selectTab ( tab: TabComponent ) {
    // deactivate all tabs
    this.tabs.toArray().forEach( tab => tab.setInactive() );

    // activate the tab the user has clicked on.
    tab && tab.setActive(); // .active = true;
  }
}
