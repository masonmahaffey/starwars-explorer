import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  page = 1;
  next = '';
  previous = '';
  movies: any;
  searchCriteria: any;

  loading = true;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadResults();
  }

  loadResults() {
    const url = 'https://swapi.co/api/films/?page=' + this.page;
    this.http.get(url).subscribe((data: any) => {
      this.loading = false;
      this.movies = data.results;
      this.next = data.next;
      this.previous = data.previous;
    });
  }

  search() {
    this.loading = true;
    const url = 'https://swapi.co/api/films/?search=' + this.searchCriteria;
    this.http.get(url).subscribe((data: any) => {
      this.loading = false;
      this.movies = data.results;
      this.next = data.next;
      this.previous = data.previous;
    });
  }

  previousPage() {
    if(this.page > 1) {
      this.page--;
      this.loadResults();
    }
  }

  nextPage() {
    if(this.next.length > 0) {
      this.page++;
      this.loadResults();
    }
  }
}
