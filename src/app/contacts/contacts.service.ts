import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor( private httpClient: HttpClient) { }

// tslint:disable-next-line: typedef
    getContacts(){
const httpHeaders = new HttpHeaders();
httpHeaders.append('content-type', 'application/json');

return this.httpClient.get('http://localhost:3000/contacts');

     /* const contactList = [
         {contactId: 1, contactName: 'Neo'},
         {contactId: 2, contactName: 'Thato'},
         {contactId: 3, contactName: 'Brain'},
         {contactId: 4, contactName: 'Thebe'}
     ]; */

    }
    // tslint:disable-next-line: typedef
    createContact(createBody){
      const httpHeaders = new HttpHeaders();
      httpHeaders.append('content-type', 'application/json');
      return this.httpClient.post('http://localhost:3000/contacts', createBody, { headers : httpHeaders});
    }
    // tslint:disable-next-line: typedef
    updateContact(contactId, updatedBody){
      const endpointURL = 'http://localhost:3000/contacts/' + contactId;
     // tslint:disable-next-line: align
     return this.httpClient.put(endpointURL, updatedBody);
    }
    deleteContacts(contactId){
      const endpointURL = 'http://localhost:3000/contacts/' + contactId;
      return this.httpClient.delete(endpointURL);
    }
}
