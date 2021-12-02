import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  id : string = ""

  constructor(private _ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.paramMap.get("id")
    console.log(this.id)
  }

}
