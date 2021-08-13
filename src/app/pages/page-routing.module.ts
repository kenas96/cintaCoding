import { NgModule } from '@angular/core'
import { PageMainComponent } from './page-main.component'
import { RouterModule, Routes } from '@angular/router'


const routes: Routes = [
    {
        path: '',
        component: PageMainComponent,
        children: [
            {
                path: '',
                loadChildren: 'app/post/post.module#PostModule',
            },
            {
                path: '**',
                redirectTo: '/pages',
                pathMatch: 'full',
            }
        ]
    }
]



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [],
    providers: [],
})
export class PageRoutingModule { }
