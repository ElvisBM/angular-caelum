import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'caelumpic-listagem',
  templateUrl: './listagem.component.html',
  styles: []
})
export class ListagemComponent implements OnInit {

  title = 'Caelum Pic Listagem';
  listaFotos
  constructor( conexaoApi: HttpClient ){
    conexaoApi.get('http://localhost:3000/v1/fotos')
    .subscribe(
        // Arrow Function
        fotosApi => {
            this.listaFotos = fotosApi
        }    
    )
  }

  ngOnInit() {
  }

}
