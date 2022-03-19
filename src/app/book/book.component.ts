import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Book } from './model/book';
import { BookService } from './service/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  books$!: Observable<Book[]>;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.books$ = this.route.paramMap.pipe(
      switchMap((params) => {
        return this.bookService.getBooks();
      })
    );
  }
}
