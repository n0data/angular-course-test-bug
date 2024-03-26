import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieCreationDTO, movieDTO } from '../movies.model';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrl: './edit-movie.component.css'
})
export class EditMovieComponent implements OnInit{

  constructor (private activatedRoute: ActivatedRoute) { }
  
  model: movieDTO;
  // ={title:'Spider-Man', inTheaters: true, summary: "whatever",
  // releaseDate: new Date(), trailer:"avsdv", poster: 'https://m.media-amazon.com/images/M/MV5BNGQ5YjE0NWYtNDRmNS00MzEyLTgzOWUtZTdiMDk5ZThiZmZkXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg',
  //  genre:"", movieTheaters:[] , actors:[]}
  
  ngOnInit(): void {
  this.activatedRoute.params.subscribe(params =>{

  });  
  }

  saveChanges(movieCreationDTO: movieCreationDTO){

  }
}
