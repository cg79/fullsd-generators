import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/general/home/home.component';
import { MqueryComponent } from './modules/general/mquery/mquery.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: MqueryComponent, },
  {
    path: 'template-driven-forms',
    loadChildren: () => import('./modules/application/example-template-driven-forms/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'mquery',
    loadChildren: () => import('./modules/general/mquery/mquery.module')
      .then(mod => mod.MqueryModule)
  },
  {
    path: 'generator',
    loadChildren: () => import('./modules/general/generator/generator.module')
      .then(mod => mod.GeneratorModule)
  },
  {
    path: 'components',
    loadChildren: () => import('./modules/application/example-components/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./modules/application/example-services/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'reactive-form',
    loadChildren: () => import('./modules/application/example-reactive-form/tutorial.module')
      .then(mod => mod.TutorialModule)
  },    
  {
    path: 'bootstrap',
    loadChildren: () => import('./modules/application/example-bootstrap/tutorial.module')
      .then(mod => mod.TutorialModule)
  },  
  {
    path: 'contact',
    loadChildren: () => import('./modules/general/contact/contact.module')
      .then(mod => mod.ContactModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./modules/general/about/about.module')
      .then(mod => mod.AboutModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./modules/general/signin/signin.module')
      .then(mod => mod.SigninModule)
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }