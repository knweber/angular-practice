import { Injectable } from '@angular/core';
import { IBook } from './book';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

// We are not using this service to share data (as it has no properties assigned to it), but rather to encapsulate the data access features --> we are moving the responsibility for managing the data away from the component
@Injectable()
export class BookService {
  private _bookUrl = './api/books/books.json';

  constructor(private _http: HttpClient) {}

  getBooks(): Observable<IBook[]> {
    return this._http.get<IBook[]>(this._bookUrl).do(data => console.log('All: ' + JSON.stringify(data))).catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if(err.error instanceof Error) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Error status: ${err.status}, message: ${err.message}`;
    }
    console.log(errorMessage);
    return Observable.throw(errorMessage);
  }
}
