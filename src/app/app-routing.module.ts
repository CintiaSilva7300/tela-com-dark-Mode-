import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './componentes/contato/contato.component';
import { HomeComponent } from './componentes/home/home.component';

const routes: Routes = [
  {path: '**', component: HomeComponent},
  {path: 'contato', component: ContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
