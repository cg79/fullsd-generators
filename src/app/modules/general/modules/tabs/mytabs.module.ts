import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppFileModule } from '../file-component/appfile.module';
import { MobxAngularModule } from 'mobx-angular';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { TabComponent } from './tab.component';

@NgModule( {
  imports: [ CommonModule, FormsModule, AppFileModule, MobxAngularModule ],
  declarations: [ TabsComponent, TabComponent ],
  exports: [ TabsComponent, TabComponent ],
} )
export class MyTabsModule { }
