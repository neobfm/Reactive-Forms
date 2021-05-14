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
      // using Form Array
      items : this.formBuilder.array([
        this.formBuilder.group({
        itemId: ['1'],
        itemName: ['2'],
        itemDesc: ['3'],
        itemDone: ['', Validators.requiredTrue]
      })
      ])
    });

  }

  ngOnInit(): void {

    console.log(this.checkoutform.get('items').value.length);
    console.log(this.checkoutform.get('items').value);
    const itemVal = this.checkoutform.get('items').value;
    console.log(itemVal[0].itemDesc);

    // track a single field only
    this.checkoutform.get('email').valueChanges.subscribe(data => {
     // console.log(data);
     this.valueChangedTracked = data;
    });
     // track entire form
    this.checkoutform.valueChanges.subscribe(data => {
      console.log(data);
    });

    // Status change of a form for a single field
    this.checkoutform.get('email').statusChanges.subscribe(data => {
       console.log(data);
     });
       // status change for the entire form
    this.checkoutform.statusChanges.subscribe(Formstate => {
      console.log(Formstate);
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
  // tslint:disable-next-line: typedef
  resetForm(){
    this.checkoutform.reset();
  }

  // tslint:disable-next-line: typedef
  get items(){
    return this.checkoutform.get('items') as FormArray;
  }

  // adding a new row on a dynamical form
  // tslint:disable-next-line: typedef
  addNewItem(){
    const itemLength = this.items.length;
    const newItem = this.formBuilder.group({
      // set the new item to be blank
      itemId: [itemLength + 1],
      itemName: [''],
      itemDesc: [''],
      itemDone: ['', Validators.requiredTrue]
    });

    this.items.push(newItem);
  }

  // Removing a row from the form
  removeItem(itemId){
   this.items.removeAt(itemId);
  }
}
