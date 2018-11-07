import{ Component, Input } from '@angular/core';
import { format } from 'url';

@Component({
    selector : 'foto',
    template : '<img [src]="url" [alt]="titulo" class="card-img-top" >'
})
export class FotoComponent{
    @Input() url = "";
    @Input() titulo = "";
}