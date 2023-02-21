import { Injectable } from '@angular/core';
import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionOperationService {

  constructor() { }
  transactionArr:Transaction[] = [];


  addTransaction(transactionFromUser:Transaction)
  {
    
    this.transactionArr.push(transactionFromUser); 
    console.log("Inside Transaction Service : Transaction Added "+transactionFromUser.transactionId);
    console.log(" Total Transaction Are :- "+this.transactionArr.length);
    
  }

  getTransactionArr():Transaction[]
  {
    return this.transactionArr;
  }

  
  getTransactionByNumber(searchTransactionId:number):Transaction
  {
    let outputTransaction:Transaction = new Transaction(0,'',0,0,'',0);
    for(let i=0;i<this.transactionArr.length;i++)
    {
      let thisTransaction:Transaction = this.transactionArr[i];
        if(thisTransaction.transactionId == searchTransactionId)
        {
          outputTransaction= thisTransaction;
          break;
        }
    }
    
    return outputTransaction;
  }

  getTransactionsByHistory(filterHistory:string):Transaction[]
  {
    // localhost:8080/api/course/{category}
   let outputArr:Transaction[] = [];

    this.transactionArr.forEach(t=>{
      if(t.history == filterHistory)
      {
        outputArr.push(t);
      }
    });

    return outputArr;
  }
}



