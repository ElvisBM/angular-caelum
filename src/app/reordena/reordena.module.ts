import { NgModule } from "@angular/core";
import { ReordenaComponent } from "./reordena.component";
//import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
    declarations:[ReordenaComponent],
    exports: [ReordenaComponent],
    // imports:[
    //     DragDropModule
    // ]
})
export class ReordenaModule{}