import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './viewComponents/dashboard/dashboard.component';
import { InventoryComponent } from './viewComponents/inventory/inventory.component';
import { OrderDetailsComponent } from './viewComponents/order-details/order-details.component';
import { OrdersSubComponent } from './viewComponents/orders-sub/orders-sub.component';
import { OrdersComponent } from './viewComponents/orders/orders.component';
import { OrderAdressComponent } from './viewComponents/ordersSub/order-adress/order-adress.component';
import { OrderPaymentComponent } from './viewComponents/ordersSub/order-payment/order-payment.component';
import { PageNotFoundComponent } from './viewComponents/page-not-found/page-not-found.component';

const routes: Routes = [
    {'path': '', 'component': DashboardComponent},
    {'path': 'inventory', 'component': InventoryComponent},
    {'path': 'orders', 'component': OrdersComponent},
    {'path': 'ordersub', 'component': OrdersSubComponent,
      children:[
        {
          path: 'orderadress',
          component: OrderAdressComponent
        },
        {
          path: 'orderpayment',
          component: OrderPaymentComponent
        }
        
      ]
    },
    {'path': 'ordr', redirectTo: '/orders', pathMatch: 'full'},
    {'path': 'ordersdetails/:orderid',  'component': OrderDetailsComponent},
    {'path': '**', 'component': PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
