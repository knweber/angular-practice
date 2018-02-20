import { Component } from '@angular/core';

@Component({
  selector: 'books',
  templateUrl: './book-list.component.html'
})

export class BookListComponent {
  title = 'All the books!';
  books = [
    {
      bookId: 2,
      bookTitle: 'The Handmaid\'s Tale',
      bookCode: "ABC",
      description: "The Handmaid's Tale is a dystopian novel by Canadian author Margaret Atwood, originally published in 1985. It is set in a near-future New England, in a totalitarian, Christian theonomy that has overthrown the United States government.",
      price: 10.99,
      starRating: 5.0,
      imageUrl: "https://middleburycampus.com/wp-content/uploads/2017/09/HandmaidsTale_DavisFamilyLibrary.jpg"
    },
    {
      bookId: 4,
      bookTitle: 'Alan Turing: The Enigma',
      bookCode: "DEF",
      description: "A biography of the British mathematician, codebreaker, and early computer scientist, Alan Turing (1912–1954) by Andrew Hodges. The book covers Alan Turing's life and work. The American 2014 film The Imitation Game is loosely based on the book, with dramatization.",
      price: 40.99,
      starRating: 4.7,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/0/09/Alan_Turing_The_Enigma.jpg"
    },
    {
      bookId: 5,
      bookTitle: 'The Daily Show (The Book)',
      bookCode: "GHI",
      description: "The complete, uncensored history of the award-winning The Daily Show with Jon Stewart, as told by its correspondents, writers, and host. ",
      price: 25.99,
      starRating: 5.0,
      imageUrl: "https://leadershipmarketingandeverything.files.wordpress.com/2017/09/the-daily-show-the-book.jpg?w=398&h=600"
    },
    {
      bookId: 7,
      bookTitle: 'Born a Crime',
      bookCode: "JKL",
      description: "Born a Crime: Stories from a South African Childhood is an autobiographical comedy book written by the South African comedian Trevor Noah",
      price: 20.99,
      starRating: 5.0,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/f/fd/Born_a_Crime_by_Trevor_Noah_%28book_cover%29.jpg"
    }
  ];
}
