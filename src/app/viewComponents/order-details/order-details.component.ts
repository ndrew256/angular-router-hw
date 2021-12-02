import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, ParamMap} from '@angular/router'

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  constructor(private _Activatedroute: ActivatedRoute) { }
  orderId: string = ''

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => {
      this.orderId = params.get('orderid')
      console.log(this.orderId)
    })
  }

}
