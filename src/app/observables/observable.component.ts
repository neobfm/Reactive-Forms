import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  orderStatus: any;
  data: Observable<any>;
  data1: Observable<any>;

  constructor() { }

  ngOnInit(): void {
   this.data = new Observable(observer => {
           setTimeout(() => {
             observer.next('In Progress');
           }, 4000);
           setTimeout(() => {
            observer.next('Processing');
          }, 8000);
          // tslint:disable-next-line: align
          setTimeout(() => {
            observer.next('Done');
          }, 12000);
    });
    // tslint:disable-next-line: align
    this.data.subscribe(val => {
      this.orderStatus = val;
    });
  }

}
