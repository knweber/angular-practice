import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IBook } from './book';
import { BookService } from './book.service';

@Component({
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})

export class BookDetailComponent implements OnInit {
  pageTitle = 'Book Detail';
  errorMessage: string;
  book: IBook;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _bookService: BookService) { }

  ngOnInit() {
    const param = +this._route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getBook(id);
    }
  }

  getBook(id: number) {
    this._bookService.getBook(id).subscribe(
      book => this.book = book,
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this._router.navigate(['/books']);
  }

}
