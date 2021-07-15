import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MongoDataModel } from './models/MongoDataModel';
import CustomObserver from './observers/CustomObserver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
 
  dataModel: MongoDataModel | null = null;

  htmlText ="<p>Your message</p>"
  title = 'conditionMongoQuery';

  ngOnInit(): void {
  }

  constructor(private ref: ChangeDetectorRef){
    // this.ref.detectChanges();
    this.dataModel = new MongoDataModel();

    // CustomObserver.observe(this.dataModel, ['expression', 'mongoQuery'], () => {
    //   this.ref.detectChanges();
    // })
  }




}
