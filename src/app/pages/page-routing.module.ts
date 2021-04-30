import { NgModule } from '@angular/core'
import { PageMainComponent } from './page-main.component'
import { RouterModule, Routes } from '@angular/router'


const routes: Routes = [
    {
        path: '',
        component: PageMainComponent,
        children: [
            {
                path: 'issue',
                loadChildren: 'app/issue/issue.module#IssueModule',
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
