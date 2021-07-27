import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookComponent} from "./model/book/book.component";
import {CreateComponent} from "./model/create/create.component";
import {EditComponent} from "./model/edit/edit.component";
import {DetailComponent} from "./model/detail/detail.component";
import {DeleteComponent} from "./model/delete/delete.component";

const routes: Routes = [
  {path: "", component: BookComponent},
  {path: "list", component: BookComponent},
  {path: "create", component: CreateComponent},
  {path: "edit/:id", component: EditComponent},
  {path: "delete/:id", component: DeleteComponent},
  {path: "detail/:id", component: DetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
