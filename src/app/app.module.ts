import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BookListComponent } from './books/book-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { BookDetailComponent } from './books/book-detail.component';

// Ng module decorator:
@NgModule({

// which of our components belong to this module
  declarations: [
    AppComponent,
    BookListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    BookDetailComponent
  ],

  // EXTERNAL modules we want to have available to all of the components that belong to this Angular module
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],

  // describes the startup component of the application -- should contain the selector we use in the index.html file
  bootstrap: [AppComponent]
})
export class AppModule { }
