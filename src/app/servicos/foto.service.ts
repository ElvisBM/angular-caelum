import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
    providedIn: 'root'
})

export class FotoService{
   private url = 'http://localhost:3000/v1/fotos/';

    constructor(private conexaoApi: HttpClient){}

    listar(){
        return this.conexaoApi.get(this.url);
    }

    cadastrar(){}

    editar(){}

    deletar(){}

    buscar(){}
}