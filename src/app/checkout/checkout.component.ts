import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutform: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    /*
    this.checkoutform = formBuilder.group({
      emailAddr: new FormControl(),
      quantity: new FormControl(),
      terms: new FormControl()
    });
      */

    this.checkoutform = formBuilder.group({
      email: [ '', Validators.required, Validators.email],
      quantity: [ '', Validators.required],
      terms: [ '', Validators.requiredTrue],
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
