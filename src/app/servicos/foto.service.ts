import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Foto } from "../foto/foto";
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root'
})

export class FotoService{
    private url = 'http://localhost:60499/v1/fotos/';
    private urlReorder = 'http://localhost:60499/v1/fotosreorder/';
    constructor(private conexaoApi: HttpClient){}

    listar():Observable<Foto[]>{
        return this.conexaoApi.get<Foto[]>(this.url);
    }

    cadastrar(foto:Foto):Observable<Object>{
        return this.conexaoApi.post(this.url, foto, {observe: 'response'});
    }

    deletar(foto:Foto):Observable<Object>{
        return this.conexaoApi.delete(this.url+foto._id);
    }
    editar(foto: Foto){
        return this.conexaoApi.put(this.url+foto._id, foto);
    }

    buscar(fotoId : string):Observable<Foto>{
        return this.conexaoApi.get<Foto>(this.url+fotoId);
    }

    reordenar(fotos:Foto){
        return this.conexaoApi.post(this.urlReorder, fotos);
    }

    listaReordenar():Observable<Foto[]>{
        return this.conexaoApi.get<Foto[]>(this.url);
    }
}