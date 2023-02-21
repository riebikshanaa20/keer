import { Component } from '@angular/core';
import { TransactionOperationService } from '../transaction-operation.service';
import { Transaction } from '../transaction';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  __transactionService:TransactionOperationService ;

  constructor(transactionService:TransactionOperationService )
  {
    this.__transactionService = transactionService;
  }

  readTransaction(transactionId:string,transactionName:string,date:string,time:string,history:string,amount:string)
  {
      console.log(transactionId+" "+transactionName+" "+date+" "+time+" "+history+" "+amount+" ");
      let transactionFromUser:Transaction = new Transaction(parseInt(transactionId),transactionName,parseInt(date),parseInt(time),history,parseInt(amount));
      this.__transactionService.addTransaction(transactionFromUser);
  }

}
