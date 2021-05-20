import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(private contactService: ContactsService) { }

  contactList: any;

  ngOnInit(): void {
    // this.contactList = this.contactService.getContacts();
    this.contactList = this.contactService.getContacts().subscribe( data => {
      this.contactList = data;
    });
  }

}
