import { Transaction } from './transaction.model';

export class AppState {
    transactions: {
        loading: boolean;
        list: Transaction[];
    }
}