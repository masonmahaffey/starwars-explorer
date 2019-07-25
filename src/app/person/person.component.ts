import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  personID: any;
  person: object = {name: ''};
  loading = true;

  constructor(private route: ActivatedRoute,
              private http: HttpClient) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:any) => {
      this.personID = params.get('person');
      this.getPerson();
    });
  }

  getPerson() {
    const url = 'https://swapi.co/api/people/' + this.personID;

    this.http.get(url).subscribe((data: object) => {
      console.log(data);
      this.loading = false;
      this.person = data;
    });
  }

}
