import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionOperationService } from '../transaction-operation.service';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  __transactionService:TransactionOperationService; // creating object of Service layer
  router:Router;
  
  allTransaction : Array<Transaction> = [];
  wishList : Array<Transaction> = [];
  wishlistCount:number=0 ;

  priceHighCss:string = "color:crimson";
  priceLowCss:string = "color:rgb(8, 112, 63);font-weight: 700;";
  priceNormalCSS:string = "color:black";
  

  constructor(transactionService:TransactionOperationService,router:Router)
  {
    this.__transactionService = transactionService;
    this.allTransaction = this.__transactionService.getTransactionArr();
    this.router = router;
    console.log(this.allTransaction.length);
  }

  viewTransactionDetails(tid:string)
  {
    
    this.router.navigate(['transactionDetail',tid]);
  }

  goForPay(transaction:string)
  {
    let transactionId = Transaction;
    console.log(" code to pay "+(transactionId+" transaction"));
    
  }

  getFilterData(filterValue:string)
  {
    console.log(" Filter Value "+filterValue);

    this.allTransaction = this.__transactionService.getTransactionsByHistory(filterValue);
  }
}






