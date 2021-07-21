import {NgModule, ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';
import {EscapeHtmlPipe} from './keep-html.pipe';
import {ObjectKeysPipe} from './objectKeys.pipe';
import { FrieldlyDate } from './friendlyDate.pipe';
import { LS } from './LS.pipe';
import { LSP } from './LSP.pipe';
import {OnlyNumber} from './OnlyNumber';


@NgModule({
  imports: [CommonModule, ],
  declarations: [
    EscapeHtmlPipe,
    ObjectKeysPipe,
    FrieldlyDate,
    LS,
    LSP,
    OnlyNumber
  ],
  exports: [
    EscapeHtmlPipe,
    ObjectKeysPipe,
    FrieldlyDate,
    LS,
    LSP,
    OnlyNumber
  ],
})
export class PipesModule {

}
