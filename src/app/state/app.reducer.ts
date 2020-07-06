import { AppState } from "../core/models/app.model";
import { createReducer, on, Action } from '@ngrx/store';
import * as actions from './app.actions';

const initialState: AppState = {
    transactions: {
        loading: false,
        list: null
    }
}

const appReducer = createReducer(
    initialState,

    on(actions.startLoader, (state) => {
        return {
            transactions: {
                ...state.transactions,
                loading: true
            }
        }
    }),

    on(actions.fetchTransactionsSuccess, (state, action) => {
        return {
            transactions: {
                list:
                    state.transactions.list ?
                        [...state.transactions.list, ...action.transactions]
                        : action.transactions,
                loading: false
            }
        }
    }),

    on(actions.fetchTransactionsFail, (state) => {
        return {
            transactions: {
                ...state.transactions,
                loading: true
            }
        }
    })

);

export function reducer(state: AppState | undefined, action: Action) {
    return appReducer(state, action);
}