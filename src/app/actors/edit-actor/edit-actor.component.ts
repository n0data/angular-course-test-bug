import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { actorCrationDTO, actorDTO } from '../actors.models';
import { ActorsService } from '../actors.service';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrl: './edit-actor.component.css'
})
export class EditActorComponent implements OnInit{


  constructor(private activatedRoute: ActivatedRoute,
    private actorsService: ActorsService,
    private router: Router){ }


  model: actorDTO;
  
  // = {id: 1,name:'Tom Holland', 
  //     dateOfBirth: new Date(), 
  //     biography: 'default value',
  //     picture: 'https://i.pinimg.com/originals/56/f9/b3/56f9b3ad48560be3f082f3a0b4b22c7e.jpg'}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {

      this.actorsService.getById(params.id).subscribe(actor => this.model = actor);

      
    });

  }

  saveChanges(actorCrationDTO: actorCrationDTO){
    console.log(actorCrationDTO);
    this.actorsService.edit(this.model.id, actorCrationDTO).subscribe(()=>{
      this.router.navigate(['/actors']);

    });
  }


}
