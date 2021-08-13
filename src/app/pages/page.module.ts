import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { PageRoutingModule } from "./page-routing.module";
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { CommonModule } from "@angular/common";
import { PageMainComponent } from "./page-main.component";
import { HttpService } from "../http.service";
import { LoginService } from "../auth/login/login.service";
import { NavComponent } from "./navbar/nav.component";
import { ControlModule } from "../control/control.module";

@NgModule({
  imports: [
    ReactiveFormsModule,
    HttpModule,
    PageRoutingModule,
    RouterModule,
    CommonModule,
    ControlModule,
  ],
  declarations: [PageMainComponent, NavComponent],
  providers: [HttpService, LoginService],
})
export class PageModule {}
