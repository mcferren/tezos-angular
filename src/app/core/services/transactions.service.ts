import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FETCH_TRANSACTIONS } from '../constants/urls';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private http: HttpClient) { }

  getTransactions(offset: number): Observable<any[][]> {
    return this.http.get<any[][]>(FETCH_TRANSACTIONS + offset);
  }

}
