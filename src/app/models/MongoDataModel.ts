import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { ChangeDetectorRef } from "@angular/core";
import MongoQueryLogic from "../mongo-tree/MongoQueryLogic";
import { BaseObservers } from "../observers/BaseObservers";
import CustomObserver from "../observers/CustomObserver";


export class MongoDataModel {
    expression = 'age >= 1 && (validated __ true || validated == 1)';

    mongoQueryObj = null;

    generateMongoExpression() {
        debugger;
        var mongoQueryObj = MongoQueryLogic.createMongoQuery( this.expression );
        this.mongoQueryObj = mongoQueryObj;
        // var mongoQueryObjNoComma = JSON.stringify(mongoQueryObj).replace(/"([^"]+)":/g, '$1:');
        // this.mongoQueryObj = mongoQueryObjNoComma;
        // var mongoObj = JSON.parse(mongoQueryObjNoComma);
        // this.mongoQueryObj = mongoObj;
    }

    constructor() {
        // CustomObserver.observe(this, ['expression', 'mongoQuery'])
    }
}