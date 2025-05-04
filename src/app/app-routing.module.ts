import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ItalianoglobalCursosComponent } from './italianoglobal-cursos/italianoglobal-cursos.component';
import { ItalianoglobalAboutComponent } from './italianoglobal-about/italianoglobal-about.component';

const routes: Routes = [
  // se definen las rutas y que componentes se van a renderizar al llamar a cada una de ellas 
  {
    path: '',
    redirectTo: 'courses',
    pathMatch:'full'
  },
  {
    path: 'courses',
    component: ItalianoglobalCursosComponent,
  },
  {
    path: 'about',
    component: ItalianoglobalAboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
