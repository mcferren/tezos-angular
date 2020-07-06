import { createAction, props } from '@ngrx/store';
import { Transaction } from '../core/models/transaction.model';

export const startLoader = createAction(
    '[App] Start Loader'
);

export const fetchTransactions = createAction(
    '[App] Fetch Transactions',
    props<{ offset: number }>()
);

export const fetchTransactionsSuccess = createAction(
    '[App] Fetch Transactions Success',
    props<{ transactions: Transaction[] }>()
);

export const fetchTransactionsFail = createAction(
    '[App] Fetch Transactions Fail'
);
