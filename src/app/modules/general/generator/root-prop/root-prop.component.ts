import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IRootProp } from './rootProp';

@Component({
  selector: 'app-root-prop',
  templateUrl: './root-prop.component.html',
  styleUrls: ['./root-prop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RootPropComponent implements OnInit {

  @Input() root: IRootProp;
  constructor() { }

  ngOnInit() {
  }

}
