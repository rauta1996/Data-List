import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public httpClient: HttpClient) {}

  // getEmployee(employees){
  //   this.httpClient.get(`http://dummy.restapiexample.com/api/v1/${employees}`)
  // }
}
