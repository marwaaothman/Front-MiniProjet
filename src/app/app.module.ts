import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeComponent } from './liste/liste.component';
import { AddComponent } from './add/add.component';
import { RechercheComponent } from './recherche/recherche.component';
import { TypepfeComponent } from './typepfe/typepfe.component';
import { GestionService } from './gestion.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ListeComponent,
    AddComponent,
    RechercheComponent,
    TypepfeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
