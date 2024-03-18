import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCrationDTO, actorDTO } from '../actors.models';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrl: './edit-actor.component.css'
})
export class EditActorComponent implements OnInit{


  constructor(private activatedRoute: ActivatedRoute){ }


  model: actorDTO = {id: 1,name:'Tom Holland', 
      dateOfBirth: new Date(), 
      biography: 'default value',
      picture: 'https://i.pinimg.com/originals/56/f9/b3/56f9b3ad48560be3f082f3a0b4b22c7e.jpg'}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      // alert (params.id);

      
    });

  }

  saveChanges(actorCrationDTO: actorCrationDTO){
    console.log(actorCrationDTO);
  }


}
