import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as actions from './app.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { TransactionsService } from '../core/services/transactions.service';
import { Transaction } from '../core/models/transaction.model';

@Injectable()
export class AppEffects {

    fetchTransactions$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.fetchTransactions),
            mergeMap(
                (action) => {
                    return this.transactionsService.getTransactions(action.offset).pipe(
                        map((response: any[][]) => {
                            let transactions: Transaction[] = response.map(
                                (value) => {
                                    return {
                                        row_id: value[0],
                                        time: new Date(value[1]),
                                        type: value[2],
                                        sender: value[3],
                                        volume: value[4]
                                    }
                                }
                            );
                            return actions.fetchTransactionsSuccess({ transactions });
                        }),
                        catchError(
                            (error) => {
                                return of(actions.fetchTransactionsFail());
                            }
                        )
                    )
                }
            )
        )
    );

    constructor(
        private actions$: Actions,
        private transactionsService: TransactionsService
    ) { }

}