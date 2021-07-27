import { Component, OnInit } from '@angular/core';
import {BookServiceService} from "../../service/book-service.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Book} from "../../inteface/book";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  book: Book ={
    id : 0,
    title: "",
    author: "",
    description : ""
  }
  id: any;
  constructor(private bookService: BookServiceService,
              private router: Router,
              activeRouter: ActivatedRoute) {
    activeRouter.paramMap.subscribe((p:ParamMap)=>{
      this.id = p.get("id");
      this.showInfor(this.id)
    })
  }

  ngOnInit(): void {
  }
  showInfor(id: String){
    this.bookService.findById(id).subscribe((data)=>{
      this.book = data;
    })
  }
  delete(){
    this.bookService.delete(this.id).subscribe(()=>{
      alert("xóa thanh cong");
    },()=> alert("xoa that bai"));

  }
}
