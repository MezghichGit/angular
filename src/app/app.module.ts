import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrefixNomPipe } from './prefix-nom.pipe';
import { ContactComponent } from './contact/contact.component';
import { ProviderListComponent } from './provider-list/provider-list.component';
import { ProviderAddComponent } from './provider-add/provider-add.component';
import { ProviderUpdateComponent } from './provider-update/provider-update.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ArticleListComponent } from './article-list/article-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PrefixNomPipe,
    ContactComponent,
    ProviderListComponent,
    ProviderAddComponent,
    ProviderUpdateComponent,
    NavbarComponent,
    ArticleListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
