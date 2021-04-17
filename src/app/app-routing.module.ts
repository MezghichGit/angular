import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ProviderAddComponent } from './provider-add/provider-add.component';
import { ProviderListComponent } from './provider-list/provider-list.component';
import { ProviderUpdateComponent } from './provider-update/provider-update.component';

const routes: Routes = [

  { path: "contact", component: ContactComponent },
  { path: "addProvider", component: ProviderAddComponent },
  { path: "listProvider", component: ProviderListComponent },
  { path: "updateProvider", component: ProviderUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
