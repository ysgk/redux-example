import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Book } from '../models/book';
import { BookService } from '../providers/book.service';

@Component({
  selector: 'app-book-container',
  template: `
  <div>
    <h2>Book Container</h2>
    <div>
      <button (click)="fetch()">Fetch</button>
      <span *ngIf="loading$|async">Loading...</span>
    </div>
    <app-book *ngFor="let book of books$|async" [title]="book.title" [author]="book.author"></app-book>
  </div>
`,
  providers: [BookService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookContainerComponent {

  books$: Observable<Book[]>;
  loading$: Observable<boolean>;

  constructor(
    private service: BookService,
  ) {
    this.books$ = this.service.getBooks();
    this.loading$ = this.service.getLoading();
  }


  fetch() {
    this.service.fetch();
  }
}
