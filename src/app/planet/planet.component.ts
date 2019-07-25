import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {

  planetID: any;
  loading = true;
  planet: object;

  constructor(private route: ActivatedRoute,
              private http: HttpClient) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:any) => {
      this.planetID = params.get('planet');
      this.getPlanet();
    });
  }

  getPlanet() {
    const url = 'https://swapi.co/api/planets/' + this.planetID;
    this.http.get(url).subscribe((data: object) => {
      this.loading = false;
      this.planet = data;
    });
  }

}
