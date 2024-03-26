import { Component, OnInit } from '@angular/core';
import { movieCreationDTO } from '../movies.model';
import { MoviesService } from '../movies.service';
import { multipleSelectorModel } from '../../utilities/multiple-selector/multiple-selector.model';
import { Router } from '@angular/router';



@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrl: './create-movie.component.css'
})
export class CreateMovieComponent implements OnInit{

  constructor(private moviesService: MoviesService, private router: Router) { }

  nonSelectedGenres: multipleSelectorModel[];
  nonSelectedMovieTheaters: multipleSelectorModel[];


  ngOnInit(): void {
    this.moviesService.postGet().subscribe(response => {
      this.nonSelectedGenres=response.genres.map(genre => {
        return <multipleSelectorModel>{key: genre.id, value: genre.name}
      });
      
      this.nonSelectedMovieTheaters = response.movieTheaters.map(movieTheater=>{
        return <multipleSelectorModel>{key: movieTheater.id, value: movieTheater.name}
      });


    });
  }

  saveChanges(movieCreationDTO: movieCreationDTO){
    console.log(movieCreationDTO);
    this.moviesService.create(movieCreationDTO).subscribe(id => {
      this.router.navigate(['/movie/' + id]);
    })
  }

}
