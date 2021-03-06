// import { HttpClient } from '@angular/common/http';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MongoDataModel } from '../../../models/MongoDataModel';
// import CustomObserver from './observers/CustomObserver';
import { XhrService } from '../../../xhr/XhrService';
// import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-mquery',
  templateUrl: './mquery.component.html',
  styleUrls: ['./mquery.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MqueryComponent implements OnInit, AfterViewInit {
 
  dataModel: MongoDataModel | null = null;

  htmlText ="<p>Your message</p>"
  title = 'conditionMongoQuery';

  quillConfig={
    //toolbar: '.toolbar',
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['code-block'],
        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ],
    },
  }

  ngOnInit(): void {
  }

  script : any = null;

  constructor() {
    // this.ref.detectChanges();
    this.dataModel = new MongoDataModel();


    // let script = this.document.createElement("script");
    //     script.setAttribute('data-name','BMC-Widget')
    //     script.src = "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
    //     script.setAttribute('data-id', 'boulderproblems');
    //     script.setAttribute('data-description', 'Thank you for your support!');
    //     script.setAttribute('data-message', 'This web is free to use. Do you want to help supporting it?');
    //     script.setAttribute('data-color',"#FF5F5F")
    //     script.setAttribute('data-position','right')
    //     script.setAttribute('data-x_margin','18')
    //     script.setAttribute('data-y-margin','18')
    //     script.async = true
    //     this.script = script

    // CustomObserver.observe(this.dataModel, ['expression', 'mongoQuery'], () => {
    //   this.ref.detectChanges();
    // })


  }
  ngAfterViewInit(): void {
    // debugger;
    // document.head.appendChild(this.script);
  }

  sendEmail() {

    if(!this.dataModel.emailBody) {
      return;
    }
    debugger;
    // const body = JSON.stringify({a:1})
    const body = {content:this.dataModel.emailBody};

    new XhrService().post(body, '/email')
    .catch(ex => {
      console.log(ex);
    })
    .finally(() => {
      this.dataModel.emailBody = '';
    });
    // 
    // this.http.post('http://localhost:4200/email', body)
  }




}
