import { NgModule } from "@angular/core";
import { HttpService } from "../http.service";
import { CommonModule } from "@angular/common";
import { ControlModule } from "../control/control.module";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { IssueListComponent } from "./list/issue-list.component";
import { IssueDetailComponent } from "./detail/issue-detail.component";
import { IssueService } from "./issue.service";
import { IssueRoutingModule } from "./issue-routing.module";
import { IssueMainComponent } from "./issue-main.component";

@NgModule({
  imports: [
    CommonModule,
    ControlModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    IssueRoutingModule,
  ],
  exports: [],
  declarations: [IssueListComponent, IssueDetailComponent, IssueMainComponent],
  providers: [IssueService, HttpService],
})
export class IssueModule {}
