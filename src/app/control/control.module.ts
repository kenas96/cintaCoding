import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { GridviewComponent } from './grid/grid-view.component'
import { FormsModule } from '@angular/forms'


@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    exports: [
      GridviewComponent,
    ],
    declarations: [
        GridviewComponent,
    ],
    providers: [],
})
export class ControlModule { }

