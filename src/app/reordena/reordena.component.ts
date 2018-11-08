import { Component, OnInit } from '@angular/core';
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';
import { FotoService } from '../servicos/foto.service';
import { ListagemComponent } from '../listagem/listagem.component';

@Component({
  selector: 'caelumpic-reordena',
  templateUrl: './reordena.component.html',
  styles: []
})
export class ReordenaComponent implements OnInit {
  //lista:ListagemComponent = new ListagemComponent;
  listaFotos
  constructor( private fotoService:FotoService ){
    this.fotoService.listar()
    .subscribe(
        // Arrow Function
        fotosApi => {
            this.listaFotos = fotosApi
        }    
    )
  }
  ngOnInit() {
  }
  onDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.listaFotos, event.previousIndex, event.currentIndex);
  }

}
