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



    
      // let numStr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      
      // const sumEvens = (numStr) => {
      //   let sum = 0;
      //   for (let i = 0; i < numStr.length; i++) {
      //     if (numStr[i] % 2 === 0) {
      //     sum = sum + numStr[i];
      //     }
      //   }
      //   return sum;
      // }
       
      // console.log(sumEvens(numStr));
     


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
