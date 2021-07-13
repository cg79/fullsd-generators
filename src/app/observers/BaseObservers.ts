import { ChangeDetectorRef } from "@angular/core";


export class BaseObservers {

    ref: ChangeDetectorRef;
    constructor(ref: ChangeDetectorRef) {
        this.ref = ref;    
    }
}