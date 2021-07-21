/**
 * A single tab page. It renders the passed template
 * via the @Input properties by using the ngTemplateOutlet
 * and ngTemplateOutletContext directives.
 */

import { Component, Input, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { observable } from 'mobx';

@Component( {
  selector: 'app-my-tab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tab.component.html',
  styleUrls: [ './tab.component.scss' ],
} )
export class TabComponent {
  @Input( 'tabTitle' ) title: string;
  @Input( 'click' ) click: Function;

  @observable @Input( 'notiftab' ) notiftab = ''

  // @Input() active = false;
  @observable active = false;


   _hdr = null;
  @Input() set hdr ( value: any ) {

    if ( !value ) {
      return;
    }
    
    this._hdr = value;
  }

  get hdr (): any {
    return this._hdr;
  }


  @observable csstab = 'pane';
  showcontent = false;

  @Output() custclick = new EventEmitter();

  setInactive () {
    this.active = false;
  }
  setActive () {
    this.active = true;
    // 
    this.csstab = 'pane active';
    // if(this.click) {
    //   this.click();
    // }

    this.custclick.emit();
  }

  public onClick ( event: Event ) {
  }


}
