import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { actorCrationDTO } from '../actors.models';

@Component({
  selector: 'app-form-actor',
  templateUrl: './form-actor.component.html',
  styleUrl: './form-actor.component.css'
})
export class FormActorComponent implements OnInit{

  constructor(private formBuilder: FormBuilder){

  }

  form: FormGroup;

  @Input()
  model: actorCrationDTO;

  @Output()
  onSaveChanges = new EventEmitter<actorCrationDTO>


  ngOnInit(): void {
    this.form= this.formBuilder.group({
      name: ['',{
        validators: [Validators.required]
      }],
      dateOfBirth: '',
      picture: '',
      biography: ''
    });

    if(this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }


  onImageSelected(image){
    this.form.get('picture').setValue(image);
  }

  changeMarkdown(content){
    this.form.get('biography').setValue(content);
  }

  saveChanges(){
    this.onSaveChanges.emit(this.form.value);
  }


}
