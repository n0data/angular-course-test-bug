import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {


  constructor(private moviesService: MoviesService){}

  ngOnInit(): void {
      this.loadData();

  }


  loadData(){
    this.moviesService.getHomePageMovies().subscribe(homeDTO => {
      this.moviesFutureReleases = homeDTO.upcomingReleases;
      this.moviesInTheaters = homeDTO.inTheaters;
    })
  }

    moviesInTheaters;
    moviesFutureReleases;

    onDelete(){
      this.loadData();

    }

}
