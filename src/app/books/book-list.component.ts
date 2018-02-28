import { Component, OnInit } from '@angular/core';
import { IBook } from './book';
import { BookService } from './book.service';

@Component({
  selector: 'books',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit {
//  private _bookService;  private variable to hold the injected service instance
  title = 'All the books!';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage: string;

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value:string) {
    this._listFilter = value;
    this.filteredBooks = this.listFilter ? this.performFilter(this.listFilter) : this.books;
  }

  filteredBooks: IBook[];
  books: IBook[] = [];

  constructor(private _bookService: BookService) {
  }

  onRatingClicked(message: string): void {
    this.title = 'All the books! ' + message;
  }

  performFilter(filterBy: string): IBook[] {
    return this.books.filter((book: IBook) => book.bookTitle.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  // we don't want to have lots of logic in our constructor -- put it here instead
  ngOnInit(): void {
    // observables are lazy -- they don't start emitting values until subscribe is called
    this._bookService.getBooks()
      .subscribe(books => {
        this.books = books;
        this.filteredBooks = this.books;
      },
      error => this.errorMessage = <any>error);
  }
}
