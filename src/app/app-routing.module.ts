import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {
      path: '',
      component: LoginComponent
  },
  {
      path: 'login',
      component: LoginComponent
  },
  {
    path: "pages",
    loadChildren: "app/pages/page.module#PageModule",
  },
  {
    path: "**",
    redirectTo: "/pages",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [],
  declarations: [],
  providers: [],
})
export class AppRoutingModule {}
