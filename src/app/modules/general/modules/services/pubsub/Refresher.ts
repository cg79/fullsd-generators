import { observable } from 'mobx';

export class Refresher {
    @observable yyy = '';
    refreshYYY() {
        this.yyy =  Math.random().toString(36).substring(7);
    }

    @observable xxx = '';
    refreshXXX() {
        this.xxx =  Math.random().toString(36).substring(7);
    }
}