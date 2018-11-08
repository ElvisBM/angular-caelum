import { Component, OnInit } from '@angular/core';
import { Foto } from '../foto/foto';
import { FotoService } from '../servicos/foto.service';

@Component({
  selector: 'caelumpic-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  foto = new Foto();

  constructor(private fotoService: FotoService) { }

  ngOnInit() {
  }
  salvar(){
    console.log(this.foto);
    this.fotoService
    .cadastrar(this.foto)
    .subscribe()
  }
}
