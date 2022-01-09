import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculaMediaSimplesComponent } from './calcula-media-simples/calcula-media-simples.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TelaFilha1Component } from './tela-pai/tela-filha1/tela-filha1.component';
import { TelaFilha2Component } from './tela-pai/tela-filha2/tela-filha2.component';
import { TelaPaiComponent } from './tela-pai/tela-pai.component';

const routes: Routes = [
  {path:'', redirectTo:'/calculadora', pathMatch:'full'},
  {path:'calculadora/:num1/:num2', component: CalculadoraComponent},
  {path:'calcula-media-simples', component: CalculaMediaSimplesComponent},
// tela pai
  {path:'tela-pai', component: TelaPaiComponent, children:[
    {path: 'tela-filha-1', component: TelaFilha1Component},
    {path: 'tela-filha-2', component: TelaFilha2Component},
//rota lista usuario
{path: 'lista-usuario', component: ListaUsuarioComponent}

  ]},

  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
