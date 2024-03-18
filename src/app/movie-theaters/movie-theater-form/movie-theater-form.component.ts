import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { movieTheatersCreationDTO, movieTheatersDTO } from './movie-theaters.model';




@Component({
  selector: 'app-movie-theater-form',
  templateUrl: './movie-theater-form.component.html',
  styleUrl: './movie-theater-form.component.css'
})
export class MovieTheaterFormComponent implements OnInit{


  constructor(private formBuilder: FormBuilder ){ }

  form: FormGroup;

  @Input()
  model: movieTheatersDTO;


  @Output()
  onSaveChanges = new EventEmitter<movieTheatersCreationDTO>();



  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required]
      }]
    })

    if (this.model !== undefined){
      this.form.patchValue(this.model);
     
    }
  }



  saveChanges(){
    this.onSaveChanges.emit(this.form.value);
  }

}
