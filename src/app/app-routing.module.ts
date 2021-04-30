import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";

const routes: Routes = [
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
