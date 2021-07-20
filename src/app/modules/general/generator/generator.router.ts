import { Routes, RouterModule } from '@angular/router';
import { JsonTojsClassComponent } from './json-tojs-class/json-tojs-class.component';

const Generator_ROUTER: Routes = [
  {
    path: '',
    component: JsonTojsClassComponent
  },
  // {
  //   path: 'jsontojsclass',
  //   component: JsonTojsClassComponent
  // }
];

export const generatorRouter = RouterModule.forChild(Generator_ROUTER );
