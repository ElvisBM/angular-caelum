import { Component, OnInit } from '@angular/core';
import { FotoService } from '../servicos/foto.service';
import { Foto } from '../foto/foto';

@Component({
	selector: 'caelumpic-listagem',
	templateUrl: './listagem.component.html',
	styles: []
})
export class ListagemComponent implements OnInit {

	title = 'Caelum Pic Listagem';
	listaFotos: Foto [] = [];
	constructor( private fotoService: FotoService ){
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

	excluir(fotoApagada:Foto){
		console.log(`Apagar ${fotoApagada.titulo}`);
		this.fotoService.deletar(fotoApagada).subscribe(
				()=>{
					console.log('apagou');
					this.listaFotos = this.listaFotos.filter(
						(foto)=>{
							if(foto != fotoApagada){
								return foto;
							}
						}
					);
					// this.listaFotos = this.listaFotos.filter(foto => foto != fotoApagada);
				}
		);
	}

}