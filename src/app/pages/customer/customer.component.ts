import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss',
})
export class CustomerComponent implements OnInit {
  public dataCustomer= JSON.parse(localStorage.getItem('customer') as string) || <any>[];
  constructor() {}
  ngOnInit(): void {

  }
  onDelete(i: any) {
    this.dataCustomer.splice(i, 1);
    localStorage.setItem("customer",JSON.stringify(this.dataCustomer));
  }
}
