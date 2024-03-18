import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieTheatersCreationDTO, movieTheatersDTO } from '../movie-theater-form/movie-theaters.model';

@Component({
  selector: 'app-edit-movie-theater',
  templateUrl: './edit-movie-theater.component.html',
  styleUrl: './edit-movie-theater.component.css'
})
export class EditMovieTheaterComponent implements OnInit{


  constructor(private activatedRoute: ActivatedRoute){ }
  
  model: movieTheatersDTO = {name: 'Agora'};

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {

    });
  }

  saveChanges(movieTheater: movieTheatersCreationDTO){

  }

}
