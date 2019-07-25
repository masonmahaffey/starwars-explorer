import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movieID: any;
  movie: object = {name: ''};
  loading = true;

  constructor(private route: ActivatedRoute,
              private http: HttpClient) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:any) => {
      this.movieID = params.get('movie');
      this.getMovie();
    });
  }

  getMovie() {
    const url = 'https://swapi.co/api/films/' + this.movieID;

    this.http.get(url).subscribe((data: object) => {
      console.log(data);
      this.loading = false;
      this.movie = data;
    });
  }
}
