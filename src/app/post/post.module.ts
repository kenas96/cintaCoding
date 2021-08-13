import { NgModule } from "@angular/core";
import { HttpService } from "../http.service";
import { CommonModule } from "@angular/common";
import { ControlModule } from "../control/control.module";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { PostListComponent } from "./list/post-list.component";
import { PostDetailComponent } from "./detail/post-detail.component";
import { PostService } from "./post.service";
import { PostRoutingModule } from "./post-routing.module";
import { PostMainComponent } from "./post-main.component";
import { JwPaginationComponent } from 'jw-angular-pagination';

@NgModule({
  imports: [
    CommonModule,
    ControlModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    PostRoutingModule,
  ],
  exports: [],
  declarations: [PostListComponent, PostDetailComponent, PostMainComponent, JwPaginationComponent],
  providers: [PostService, HttpService],
})
export class PostModule {}
