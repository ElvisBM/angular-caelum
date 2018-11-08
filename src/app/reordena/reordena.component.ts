import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'caelumpic-reordena',
  templateUrl: './reordena.component.html',
  styles: []
})
export class ReordenaComponent implements OnInit {
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
  onDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.listaFotos, event.previousIndex, event.currentIndex);
  }

}
