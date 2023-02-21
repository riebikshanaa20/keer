import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { InfoPipe } from './info-pipe';
import { PipeTaskComponent } from './pipe-task/pipe-task.component';
import { RouterModule, Routes } from '@angular/router';
import { BookingdetailsComponent } from './bookingdetails/bookingdetails.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { HoteldetailComponent } from './hoteldetail/hoteldetail.component';
import { HotelroomsComponent } from './hotelrooms/hotelrooms.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { TdftransactionComponentComponent } from './tdftransaction-component/tdftransaction-component.component';
import { HttpClientModule } from '@angular/common/http';



const allLinks:Routes = [
  {path:'transactiondetails',component:AdminComponent},
  {path:'hotelrooms',component:HotelroomsComponent},
  {path:'bookingdetails',component:BookingdetailsComponent},
  {path:'transactionDetail/:tid',component:TransactionDetailComponent},
  {path: 'viewTransactionDetails',component:UserComponent}

  
]

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    PipeTaskComponent,
    InfoPipe,
    BookingdetailsComponent,
    TransactionDetailComponent,
    HoteldetailComponent,
    HotelroomsComponent,
    TdftransactionComponentComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,RouterModule.forRoot(allLinks)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
