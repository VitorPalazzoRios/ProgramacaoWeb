import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CalculaMediaSimplesComponent } from './calcula-media-simples/calcula-media-simples.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { RodapeComponent } from './rodape/rodape.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TelaPaiComponent } from './tela-pai/tela-pai.component';
import { TelaFilha1Component } from './tela-pai/tela-filha1/tela-filha1.component';
import { TelaFilha2Component } from './tela-pai/tela-filha2/tela-filha2.component';
import { UsuarioService } from './services/usuario.service';
import {HttpClientModule} from '@angular/common/http';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    CalculaMediaSimplesComponent,
    CabecalhoComponent,
    RodapeComponent,
    PageNotFoundComponent,
    TelaPaiComponent,
    TelaFilha1Component,
    TelaFilha2Component,
    ListaUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
  UsuarioService
],

  bootstrap: [AppComponent]
})
export class AppModule { }
