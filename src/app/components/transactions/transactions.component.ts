import { Component, OnInit, OnDestroy } from '@angular/core';
import { Transaction } from '../../core/models/transaction.model';
import { Store, select } from '@ngrx/store';
import { RootState } from '../../state/';
import { SubSink } from 'subsink';
import * as fromAppState from '../../state';
import * as fromAppActions from '../../state/app.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {

  transactions$: Observable<{ list: Transaction[], loading: boolean }>;

  constructor(
    private store: Store<RootState>
  ) { }

  ngOnInit() {
    this.transactions$ = this.store.pipe(select(fromAppState.selectTransactions));
    this.store.dispatch(fromAppActions.startLoader());
    this.store.dispatch(fromAppActions.fetchTransactions({ offset: 18990092 }));
  }

  onScroll(index: number, transactions: Transaction[], loading: boolean) {
    if (index == transactions?.length - 8) {
      const size = transactions.length;
      if (!loading) {
        const offset = transactions[size - 1].row_id;
        this.store.dispatch(fromAppActions.startLoader());
        this.store.dispatch(fromAppActions.fetchTransactions({ offset: offset }));
      }
    }
  }

}
