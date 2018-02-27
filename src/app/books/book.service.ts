import { Injectable } from '@angular/core';
import { IBook } from './book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

// We are not using this service to share data (as it has no properties assigned to it), but rather to encapsulate the data access features --> we are moving the responsibility for managing the data away from the component
@Injectable()
export class BookService {
  private _bookUrl = './books.json';

  constructor(private httpClient: HttpClient) {}

  getBooks(): Observable<IBook[]> {
    return this.httpClient.get<IBook[]>(this._bookUrl);
  }
}
