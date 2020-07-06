import { AppState } from '../core/models/app.model';

export class RootState {
    app: AppState;
}

/* CREATING SELECTORS */
export const selectTransactions = (state: RootState) => state.app.transactions;