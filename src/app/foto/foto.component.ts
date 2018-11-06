import{ Component, Input } from '@angular/core';
import { format } from 'url';

@Component({
    selector : 'foto',
    template : '<img [src]="url" [alt]="titulo" >'
})
export class FotoComponent{
    @Input() url = "";
    @Input() titulo = "";
}