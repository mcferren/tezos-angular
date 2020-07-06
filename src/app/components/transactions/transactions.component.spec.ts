import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import * as fromAppState from '../../state';
import { TransactionsComponent } from './transactions.component';
import { RootState } from 'src/app/state';
import { By } from '@angular/platform-browser';
import { Transaction } from 'src/app/core/models/transaction.model';
import { MemoizedSelector } from '@ngrx/store';

describe('TransactionsComponent', () => {

  let component: TransactionsComponent;
  let fixture: ComponentFixture<TransactionsComponent>;
  let store: MockStore;
  
  const transactions = { list: null, loading: false }
  const initialState: RootState = {
    app: { transactions }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TransactionsComponent
      ],
      providers: [
        provideMockStore({ initialState })
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a title text including 'Recent Transactions'`, () => {
    const compiled = fixture.debugElement.query(By.css('.title-bar'));
    const title: HTMLDivElement = compiled.nativeElement;
    expect(title.textContent.includes('Recent Transactions')).toBeTruthy();
  })

});
