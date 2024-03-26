import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { movieCreationDTO, movieDTO } from '../movies.model';
import { MoviesService } from '../movies.service';
import { multipleSelectorModel } from '../../utilities/multiple-selector/multiple-selector.model';
import { actorsMovieDTO } from '../../actors/actors.models';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrl: './edit-movie.component.css'
})
export class EditMovieComponent implements OnInit{

  constructor (private activatedRoute: ActivatedRoute,
              private moviesService: MoviesService,
              private router: Router) { }
  
  model: movieDTO;
  // ={title:'Spider-Man', inTheaters: true, summary: "whatever",
  // releaseDate: new Date(), trailer:"avsdv", poster: 'https://m.media-amazon.com/images/M/MV5BNGQ5YjE0NWYtNDRmNS00MzEyLTgzOWUtZTdiMDk5ZThiZmZkXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg',
  //  genre:"", movieTheaters:[] , actors:[]}
  
  selectedGenres: multipleSelectorModel[];
  nonSelectedGenres: multipleSelectorModel[];
  selectedMovieTheaters: multipleSelectorModel[];
  nonSelectedMovieTheaters: multipleSelectorModel[];
  selectedActors: actorsMovieDTO[];

  ngOnInit(): void {
  this.activatedRoute.params.subscribe(params =>{
    this.moviesService.putGet(params.id).subscribe(putGetDTO =>{
      this.model= putGetDTO.movie;

      this.selectedGenres=putGetDTO.selectedGenres.map(genre => {
        return <multipleSelectorModel>{key: genre.id, value: genre.name}
      });

      this.nonSelectedGenres=putGetDTO.nonSelectedGenres.map(genre => {
        return <multipleSelectorModel>{key: genre.id, value: genre.name}
      });

      this.selectedMovieTheaters = putGetDTO.selectedMovieTheaters.map(movieTheater=>{
        return <multipleSelectorModel>{key: movieTheater.id, value: movieTheater.name}
      });
      
      this.nonSelectedMovieTheaters = putGetDTO.nonSelectedMovieTheaters.map(movieTheater=>{
        return <multipleSelectorModel>{key: movieTheater.id, value: movieTheater.name}
      });


      this.selectedActors = putGetDTO.actors;

    })
  });  
  }

  saveChanges(movieCreationDTO: movieCreationDTO){
    this.moviesService.edit(this.model.id, movieCreationDTO).subscribe(()=> {
      this.router.navigate(['/movie/' + this.model.id]);

    });
  }
}
