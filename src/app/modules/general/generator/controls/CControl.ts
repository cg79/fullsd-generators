
import { observable, computed, action, autorun, toJS } from 'mobx';

export abstract class CControl {
  childrens: CControl[] = [];

  constructor(data) {

  }

  renderChildrens() {
    let html = '';
    for (let i = 0; i < this.childrens.length; i++) {
      const children = this.childrens[i];
      html += children.toString();
    }
    return html;
  }

  addChildren(ctrl) {
    this.childrens.push(ctrl);
  }

  public abstract toString(): string;
}
