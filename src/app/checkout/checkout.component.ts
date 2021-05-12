import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutform: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.checkoutform = formBuilder.group({
      emailAddr: new FormControl(),
      quantity: new FormControl(),
      terms: new FormControl()
    });

  }

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  postData(){
    console.log(this.checkoutform);
    console.log(this.checkoutform.value);
  }
}
