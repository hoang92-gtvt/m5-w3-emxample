import { Component, OnInit } from '@angular/core';
import {Book} from "../../inteface/book";
import {BookServiceService} from "../../service/book-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books : Book[] = [];

  constructor(private bookService : BookServiceService,
              private router: Router) { }

  ngOnInit(): void {
    this.getAll();
  }

  public getAll(){
    this.bookService.findAllBook().subscribe((data)=>{
      this.books = data;
    })
  }
  public changePage(){
    this.router.navigateByUrl("/create");
  }

}
