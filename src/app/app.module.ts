import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './viewComponents/dashboard/dashboard.component';
import { InventoryComponent } from './viewComponents/inventory/inventory.component';
import { OrdersComponent } from './viewComponents/orders/orders.component';
import { PageNotFoundComponent } from './viewComponents/page-not-found/page-not-found.component';
import { OrderDetailsComponent } from './viewComponents/order-details/order-details.component';
import { OrderAdressComponent } from './viewComponents/ordersSub/order-adress/order-adress.component';
import { OrderPaymentComponent } from './viewComponents/ordersSub/order-payment/order-payment.component';
import { OrdersSubComponent } from './viewComponents/orders-sub/orders-sub.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InventoryComponent,
    OrdersComponent,
    PageNotFoundComponent,
    OrderDetailsComponent,
    OrderAdressComponent,
    OrderPaymentComponent,
    OrdersSubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
