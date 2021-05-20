import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor( private httpClient: HttpClient) { }

// tslint:disable-next-line: typedef
    getContacts(){
    return this.httpClient.get('http://localhost:3000/contacts');

     /* const contactList = [
         {contactId: 1, contactName: 'Neo'},
         {contactId: 2, contactName: 'Thato'},
         {contactId: 3, contactName: 'Brain'},
         {contactId: 4, contactName: 'Thebe'}
     ]; */

    }
}
