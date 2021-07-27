import { Component, OnInit } from '@angular/core';
import {BookServiceService} from "../../service/book-service.service";
import {Book} from "../../inteface/book";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  book:FormGroup = new FormGroup(
    {
      id : new FormControl(),
      title : new FormControl(),
      author : new FormControl(),
      description : new FormControl()
    }
  );
  constructor(private bookService: BookServiceService,
              private router :Router
  ) { }

  ngOnInit(): void {
  }
  public createBook(){
    let book:Book  = this.book.value;
    console.log(book);
    this.bookService.saveBook(book).subscribe((data)=>{

      alert("Thêm thành công")
    }, (data)=>console.log("luu that bai"));
    // this.router.navigate(["/book"])
  }
}
