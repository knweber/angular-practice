import { Component, OnInit } from '@angular/core';
import { IBook } from './book';

@Component({
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  pageTitle: string = 'Book Detail';
  book: IBook;

  constructor() { }

  ngOnInit() {
  }

}
