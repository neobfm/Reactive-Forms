import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(private contactService: ContactsService) { }

  msgTrue = false;
  contactList: any;

  ngOnInit(): void {
    // this.contactList = this.contactService.getContacts();
    this.contactList = this.contactService.getContacts().subscribe( data => {
      this.contactList = data;
    });
  }
     // tslint:disable-next-line: typedef
     addNewContact(form){
    //  Using static data
    // const newformData = {id: 6, firstname: 'louis', latsname: 'kumar'};

    console.log(form.value.id);
    console.log(form.value.firstname);
    console.log(form.value.lastname);
    // using dynamic data
    const newformData = {id: form.value.id, firstname: form.value.firstname, latsname: form.value.lastname};

    this.contactService.createContact(newformData).subscribe(data => {
      console.log(data);
      this.msgTrue = true;
    });
  }
  updateContacts(contactId){
    //  Using static data
     const newformData = {id: contactId, firstname: 'Andy', latsname: 'steward'};
     this.contactService.updateContact(contactId, newformData).subscribe( data => {
      this.msgTrue = true;
     });
  }
  deleteContact(contactId){
      this.contactService.deleteContacts(contactId).subscribe( data => {
        console.log(data);
        this.msgTrue = true;
      });
  }
}
