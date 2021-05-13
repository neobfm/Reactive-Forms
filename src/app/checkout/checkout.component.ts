import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

   checkoutform: FormGroup;
   itemArr = FormArray;

   valueChangedTracked = '';
  constructor(private formBuilder: FormBuilder) {
    /*
    this.checkoutform = formBuilder.group({
      emailAddr: new FormControl(),
      quantity: new FormControl(),
      terms: new FormControl()
    });
      */

    this.checkoutform = formBuilder.group({
      // email: [ '', Validators.required, Validators.email],
      email: [ '', Validators.required],
      quantity: [ '', Validators.required],
      terms: [ '', Validators.requiredTrue],
    });

  }

  ngOnInit(): void {

    // track a single field only
    this.checkoutform.get('email').valueChanges.subscribe(data => {
     // console.log(data);
     this.valueChangedTracked = data;
    });
     // track entire form
    this.checkoutform.valueChanges.subscribe(data => {
      console.log(data);
    });

    /*
    this.checkoutform.setValue({
      email: 'test@test.com', // setting values for single fields of the form for all fields
      quantity: 5,
      terms: true
    });
    */
    this.checkoutform.patchValue({
      email: 'test@test.com', // setting values for single fields of the form
      quantity: 5,
      // terms: true
    });
  }
  // tslint:disable-next-line: typedef
  postData(){
    // console.log(this.checkoutform);
    console.log(this.checkoutform.value); // Gives all values of the entire form
    console.log(this.checkoutform.value.email); // getting each value in single form
    console.log(this.checkoutform.value.quantity);
    console.log(this.checkoutform.value.terms);
  }
  resetForm(){
    this.checkoutform.reset();
  }
}
