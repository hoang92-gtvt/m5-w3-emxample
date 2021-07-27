import { Component, OnInit } from '@angular/core';
import {Book} from "../../inteface/book";
import {BookServiceService} from "../../service/book-service.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

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

}
