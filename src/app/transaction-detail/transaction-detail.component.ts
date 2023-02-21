import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Transaction } from '../transaction';
import { TransactionOperationService } from '../transaction-operation.service';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css']
})
export class TransactionDetailComponent {
  __transactionService:TransactionOperationService; // creating object of Service layer
  router:Router;
  activeRoute:ActivatedRoute;
  t:Transaction = new Transaction(0,'',0,0,'',0);
    constructor(transactionService:TransactionOperationService,router:Router,activeRoute:ActivatedRoute)
  {
    this.__transactionService = transactionService;
    this.router = router;
    this.activeRoute = activeRoute;

    let searchTransactionId= this.activeRoute.snapshot.params['tid']; // extract value from prameter(URI)
    console.log(searchTransactionId);
    this.t = this.__transactionService.getTransactionByNumber(parseInt(searchTransactionId)); // get data from service class
    console.log(this.t);
  }

}
