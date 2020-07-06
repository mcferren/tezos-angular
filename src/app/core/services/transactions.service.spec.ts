import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TransactionsService } from './transactions.service';
import { FETCH_TRANSACTIONS } from '../constants/urls';

describe('TransactionsService', () => {

  let service: TransactionsService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(TransactionsService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable<any[][]>', () => {
    const dummyData = [
      [18991697,1576404169000,"transaction","tz1bDXD6nNSrebqmAnnKKwnX1QdePSMCj4MX",15139.244751]
    ];
    const offset = 18990092;
    service.getTransactions(offset).subscribe(
      (transactions) => {
        expect(transactions).toBe(dummyData);
      }
    );
    const req = controller.expectOne(`${FETCH_TRANSACTIONS}${offset}`);
    expect(req.request.method).toBe("GET");
    req.flush(dummyData);
  });

});
