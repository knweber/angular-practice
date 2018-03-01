import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
// ^ registers the router service, declares the router directives, exposes the routes we configure

import { AppComponent } from './app.component';
import { BookListComponent } from './books/book-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { BookDetailComponent } from './books/book-detail.component';
import { WelcomeComponent } from './shared/welcome.component';

// Ng module decorator:
@NgModule({
  // which of our components belong to this module
  declarations: [
    AppComponent,
    BookListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    BookDetailComponent,
    WelcomeComponent
  ],

  // EXTERNAL modules we want to have available to all of the components that belong to this Angular module
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, // service
    RouterModule.forRoot([
      { path: 'books', component: BookListComponent },
      { path: 'books/:id', component: BookDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
    ]), // service
  ],
  providers: [],

  // describes the startup component of the application -- should contain the selector we use in the index.html file
  bootstrap: [AppComponent],
})
export class AppModule {}
