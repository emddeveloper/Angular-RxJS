import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth.guard";
import { CanDeactivateGuard } from "./candeactivate.guard";
import { HomeComponent } from "./home/home.component";
import { MyAuthGuard } from "./myAuth.guard";
import { PageNotFoundComponent } from "./page-not-found/pageNotFound.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UsersComponent } from "./users/users.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "users",
    component: UsersComponent,
  },
  {
    path: "servers",
    component: ServersComponent,
    canActivate: [MyAuthGuard],
    canDeactivate: [CanDeactivateGuard],
    children: [
      {
        path: ":id",
        component: ServerComponent,
      },
      {
        path: ":id/edit",
        component: EditServerComponent,
      },
    ],
  },
  {
    path: "not-found",
    component: PageNotFoundComponent,
  },
  {
    path: "**",
    redirectTo: "not-found",
    pathMatch: "full",
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
