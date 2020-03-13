import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Employee';
  submitted = false;
  TableForm: FormGroup;

  users : any;

  constructor(
    public http: HttpClient
    ){}

    ngOnInit(){
      let res = this.http.get("https://jsonplaceholder.typicode.com/users");
      res.subscribe(data => this.users = data );
    }
}
