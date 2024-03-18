import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { genreCreationDTO } from '../genres.model';
import { GenresService } from '../genres.service';


@Component({
  selector: 'app-edit-genre',
  templateUrl: './edit-genre.component.html',
  styleUrl: './edit-genre.component.css'
})
export class EditGenreComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private genresService: GenresService,
    private router: Router){ }

  model: genreCreationDTO;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.genresService.getById(params.id).subscribe(genre => {
        this.model =genre; 
      })
    });
  }

  saveChanges(genreCreationDTO: genreCreationDTO){
    this.genresService.edit(this.model.id, genreCreationDTO)
    .subscribe(()=> {
      this.router.navigate(["/genres"]);
    });
  }



}
