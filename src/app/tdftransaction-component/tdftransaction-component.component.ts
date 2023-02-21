import { Component } from '@angular/core';
import { Transaction } from '../transaction';
import { TransactionOperationService } from '../transaction-operation.service';

@Component({
  selector: 'app-tdftransaction-component',
  templateUrl: './tdftransaction-component.component.html',
  styleUrls: ['./tdftransaction-component.component.css']
})
export class TdftransactionComponentComponent {
   __transactionService:TransactionOperationService;
   t:Transaction = new Transaction(0,'',0,0,'',0);
  
   constructor(transactionService:TransactionOperationService)
   {
     this.__transactionService = transactionService;
   }

   doFormSubmit()
   {
     console.log("form submit button clicked ")
     console.log(this.t);
    
   }

}
