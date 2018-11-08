import { Routes, RouterModule } from '@angular/router';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ReordenaComponent } from './reordena/reordena.component';

const rotasApp:Routes =[
    {path:'', component: ListagemComponent},
    {path:'cadastro', component: CadastroComponent },
    {path:'reordena', component: ReordenaComponent},
    {path: '**', redirectTo: ''}
]

export const ModuloRoteamento = RouterModule.forRoot(rotasApp);