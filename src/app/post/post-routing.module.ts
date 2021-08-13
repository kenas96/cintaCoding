import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostMainComponent } from "./post-main.component";
import { PostListComponent } from "./list/post-list.component";

const routes: Routes = [
  {
    path: "",
    component: PostMainComponent,
    children: [
      {
        path: "",
        component: PostListComponent,
      },
      {
        path: "**",
        component: PostListComponent,
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
export class PostRoutingModule {}
