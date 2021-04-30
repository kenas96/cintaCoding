import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IssueMainComponent } from "./issue-main.component";
import { IssueListComponent } from "./list/issue-list.component";

const routes: Routes = [
  {
    path: "",
    component: IssueMainComponent,
    children: [
      {
        path: "",
        component: IssueListComponent,
      },
      {
        path: "**",
        component: IssueListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: [],
  providers: [],
})
export class IssueRoutingModule {}
