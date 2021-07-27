import { Component, OnInit } from '@angular/core';
import {BookServiceService} from "../../service/book-service.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Book} from "../../inteface/book";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  book: FormGroup =new FormGroup({
    id: new FormControl(),
    title : new FormControl(),
    author: new FormControl(),
    description : new FormControl()

  })

  constructor(private bookService : BookServiceService,
              activateRouter: ActivatedRoute,
              private router : Router) {
    activateRouter.paramMap.subscribe((para: ParamMap)=>{
      this.change(para.get("id"));
    })

  }

  ngOnInit(): void {
  }

  editBook() {
    this.bookService.editBook(this.book.controls["id"].value, this.book.value).subscribe(()=>{
      alert ("Sửa thanh cong");
    }, ()=>console.log("fail"));

  }
  change(id : any){
    this.bookService.findById(id).subscribe((data)=>{
      console.log(data)
      // this.book.controls["id"] = id;
      // this.book.controls["title"].setValue(data.title) ;
      // this.book.controls["author"].setValue(data.author) ;
      // this.book.controls["description"].setValue(data.description) ;
      this.book.setValue(data);

    })

  }
}
