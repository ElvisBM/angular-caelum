import { Component, OnInit } from '@angular/core';
import { Foto } from '../foto/foto';
import { FotoService } from '../servicos/foto.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'caelumpic-cadastro',
	templateUrl: './cadastro.component.html',
	styles: []
})
export class CadastroComponent implements OnInit {

	foto = new Foto();

	constructor(private fotoService: FotoService,
							private roteador: Router,
							private rotaAtiva: ActivatedRoute){ }

	ngOnInit() {
		/*
		this.rotaAtiva.params.subscribe(
			parametros => {
				parametros.fotoId
			}
		)*/

		let fotoId = this.rotaAtiva.snapshot.params.fotoId;
		if(fotoId){
			this.fotoService.buscar(fotoId).subscribe(
				resposta => {
					console.log(resposta);
					this.foto = resposta;
				}
			);
		}
	};

	salvar(){
		console.log(this.foto);
		if(this.foto._id){
			this.fotoService
			.editar(this.foto)
			.subscribe(
				resposta => this.roteador.navigate([''])
			)
		}else{
			this.fotoService
			.cadastrar(this.foto)
			.subscribe(
				(resposta)=>{
					console.log(resposta);
					this.roteador.navigate([]);
				},
				erro => console.log(erro),
				()=> console.log('completou')   
			)
		}
	}
}
