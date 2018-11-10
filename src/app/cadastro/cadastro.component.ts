import { Component, OnInit } from '@angular/core';
import { Foto } from '../foto/foto';
import { FotoService } from '../servicos/foto.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'caelumpic-cadastro',
	templateUrl: './cadastro.component.html',
	styles: []
})
export class CadastroComponent implements OnInit {

	foto = new Foto();
	
	formCadastro: FormGroup
	titulo = new FormControl('', Validators.compose([
													Validators.required, 
													Validators.minLength(2)
												]));
	url = new FormControl('', Validators.required);

	constructor(private fotoService: FotoService,
							private roteador: Router,
							private rotaAtiva: ActivatedRoute,
							private formBuilder: FormBuilder){ }

	ngOnInit() {

		this.formCadastro = this.formBuilder.group({
			titulo: this.titulo,
			url: this.url,
			descricao: 'tesadas',
		})




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
					this.formCadastro.patchValue(resposta);
				}
			);
		}
	};

	salvar(){
		console.log(this.foto);
		//Juntar dois objetos//Spread Operator
		this.foto = {...this.foto, ...this.formCadastro.value};

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
