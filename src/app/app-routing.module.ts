import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProviderAddComponent } from './provider-add/provider-add.component';
import { ProviderListComponent } from './provider-list/provider-list.component';
import { ProviderUpdateComponent } from './provider-update/provider-update.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "app-navbar" },
  { path: "contact", component: ContactComponent },
  { path: "addProvider", component: ProviderAddComponent },
  { path: "listProvider", component: ProviderListComponent },
  { path: "updateProvider/:id", component: ProviderUpdateComponent },
  { path: "listArticle", component: ArticleListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
