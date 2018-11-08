import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from './card/card.module';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ModuloRoteamento } from './app.routes';
import { MenuComponent } from './menu/menu.component'; 
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent,
    CadastroComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FotoModule,
    CardModule,
    ModuloRoteamento,
    FormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
