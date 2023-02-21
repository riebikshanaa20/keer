export class Transaction {
    transactionId:number;
    transactionName:string;
   date:number;
   time:number;
   history:string;
   amount:number;

   constructor(
    transactionId:number,
    transactionName:string,
   date:number,
   time:number,
   history:string,
   amount:number,
   )

   {
    this.transactionId=transactionId;
    this.transactionName=transactionName;
   this.date=date;
   this.time=time;
   this.history=history;
   this.amount=amount;
   }
   
}

