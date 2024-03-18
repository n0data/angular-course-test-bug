import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    this.moviesInTheaters =[
      {
      title: 'Spiderman',
      releaseDate: new Date(),
      price : 1400.99,
      poster: 'https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_.jpg'
    },
    {
      title: 'moana',
      releaseDate: new Date(),
      price : 234.99,
      poster: 'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_FMjpg_UX1000_.jpg'
    }
  ];
  this.moviesFutureReleases = [
  ];
  }
    moviesInTheaters;
    moviesFutureReleases;


}
