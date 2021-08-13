import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { LoginService } from './auth/login/login.service';
import { HttpService } from './http.service';
import { ControlModule } from "./control/control.module";
import { LoginComponent } from './auth/login/login.component';
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    RouterModule,
    ControlModule,
  ],
  providers: [HttpService,LoginService],
  bootstrap: [AppComponent],
})
export class AppModule {}
