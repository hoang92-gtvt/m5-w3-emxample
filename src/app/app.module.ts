import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {BookComponent} from "./model/book/book.component";
import {CreateComponent} from "./model/create/create.component";
import {EditComponent} from "./model/edit/edit.component";
import {DeleteComponent} from "./model/delete/delete.component";
import { DetailComponent } from './model/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    CreateComponent,
    EditComponent,
    DeleteComponent,
    DetailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
