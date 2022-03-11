import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Book } from '../model/book';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class BookService {
  booksUrl = 'localhost:9010/book';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl);
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.booksUrl, book, httpOptions);
  }

  updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(this.booksUrl, book, httpOptions);
  }
}
