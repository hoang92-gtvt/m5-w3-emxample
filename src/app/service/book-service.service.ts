import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../inteface/book";

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  url = "http://localhost:3000";
  constructor(private httpClient: HttpClient) { }

  public findAllBook():Observable<any>{
    return this.httpClient.get<any>(this.url+"/books");

  }
  public saveBook(book: Book) {
    return this.httpClient.post<any>(this.url +"/books", book)
  }
  public findById(id:any){
    return this.httpClient.get<any>(this.url+ "/books/"+ id)
  }

  public editBook(id: any, book : Book){
    return this.httpClient.put<any>(this.url + "/books/" +id, book);
  }

  public delete(id: any){
    return this.httpClient.delete<any>(this.url + "/books/" + id)
  }
}
