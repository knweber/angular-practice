import { Component } from '@angular/core';
import { BookService } from './books/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BookService]
})
export class AppComponent {
  pageTitle = 'hello friend';
}
